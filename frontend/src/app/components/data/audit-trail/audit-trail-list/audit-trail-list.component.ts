import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Permission } from '../../../../model/auth/permission.model';
import { AuditTrail } from '../../../../model/data/audit-trail.model';
import { CrudService } from '../../../../services/crud.service';
import { Page } from 'src/app/dto/page.dto';

@Component({
  selector: 'app-audit-trail-list',
  templateUrl: './audit-trail-list.component.html',
  styleUrls: ['./audit-trail-list.component.scss']
})
export class AuditTrailListComponent implements OnInit {

  displayedColumns: string[] = [
    'timestamp',
    'actionEventType',
    'userSystem',
    'affectedEntity',
    'iPAddress',
    'userAgent',
    'statusOutcome',
    'additionalMetadata',
    'actions'];
  dataSource: AuditTrail[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('audittrail').subscribe((res: AppResponse<Page>) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "audittrail").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/audittrail-form']);
  }



  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(", ");
  }



}
