import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Permission } from '../../../../model/auth/permission.model';
import { Purchase } from '../../../../model/data/purchase.model';
import { CrudService } from '../../../../services/crud.service';
import { Page } from '../../../..//dto/page.dto';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

  displayedColumns: string[] = [
    'product',
    'costPrice',
    'vat',
    'discount',
    'quantity',
    'weight',
    'total',
    'supplier',
    'purchaseDate',
    'attachments',
    'actions'];
  dataSource: Purchase[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('purchase').subscribe((res: AppResponse<Page>) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "purchase").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/purchase-form']);
  }



  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(", ");
  }



}
