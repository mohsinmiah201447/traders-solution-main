import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Permission } from '../../../../model/auth/permission.model';
import { Supplier } from '../../../../model/config/supplier.model';
import { CrudService } from '../../../../services/crud.service';
import { Page } from 'src/app/dto/page.dto';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'contactName',
    'contactTitle',
    'phoneNumber',
    'emailAddress',
    'address',
    'billingAddress',
    'paymentTerms',
    'paymentMethod',
    'tin',
    'website',
    'productCategories',
    'supplierRating',
    'agreements',
    'preferredSupplier',
    'leadTime',
    'minimumOrderQuantity',
    'actions'];
  dataSource: Supplier[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('supplier').subscribe((res: AppResponse<Page>) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "supplier").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/supplier-form']);
  }



  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(", ");
  }



}
