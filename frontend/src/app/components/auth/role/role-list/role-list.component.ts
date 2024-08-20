import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../model/auth/role.model';
import { CrudService } from '../../../../services/crud.service';
import { Router } from '@angular/router';
import { Permission } from '../../../../model/auth/permission.model';
import { AppResponse } from '../../../../dto/response.dto';
import { Page } from 'src/app/dto/page.dto';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'permissions', 'actions'];
  dataSource: Role[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('role').subscribe((res: AppResponse<Page>) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "role").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/role-form']);
  }

  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(", ");
  }

}
