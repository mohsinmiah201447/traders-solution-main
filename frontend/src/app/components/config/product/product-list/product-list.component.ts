import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Permission } from '../../../../model/auth/permission.model';
import { Product } from '../../../../model/config/product.model';
import { CrudService } from '../../../../services/crud.service';
import { Page } from 'src/app/dto/page.dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'sku',
    'category',
    'brand',
    'unitPrice',
    'costPrice',
    'quantityInStock',
    'reorderPoint',
    'supplierID',
    'purchaseDate',
    'expirationDate',
    'location',
    'barcode',
    'serialNumber',
    'condition',
    'weight',
    'dimensions',
    'taxRate',
    'minimumOrderQuantity',
    'discounts',
    'images',
    'attachments',
    'actions'];
  dataSource: Product[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('product').subscribe((res: AppResponse<Page>) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "product").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/product-form']);
  }



  // getPermissionAsList(permissions: Permission[]): string {
  //   return permissions.map((p: Permission) => p.name).join(", ");
  // }



}
