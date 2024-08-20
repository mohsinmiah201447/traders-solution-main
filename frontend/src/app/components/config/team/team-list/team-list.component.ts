import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Permission } from '../../../../model/auth/permission.model';
import { Team } from '../../../../model/config/team.model';
import { CrudService } from '../../../../services/crud.service';
import { Page } from 'src/app/dto/page.dto';
import { Employee } from 'src/app/model/config/employee.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'leader', 'members', 'actions'];
  dataSource: Team[] = [];

  constructor(private service: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.service.getList('team').subscribe((res: AppResponse<Page>) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, 'team').subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    });
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/team-form']);
  }

  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(', ');
  }

  getMemberNames(members: Employee[]) {
    return members.map(emp => emp.firstName).join(', ')
  }
}
