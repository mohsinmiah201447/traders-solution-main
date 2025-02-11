import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Order } from '../../../../model/data/order.model';
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['invoiceNumber', 'customer', 'orderDate', 'totalAmount', 'actions'];
  dataSource: Order[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('order').subscribe((res: AppResponse<any>) => {
      this.dataSource = res.data.content
    }
    );
  }


  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "order").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/order-form']);
  }

  isPaymentDue(index: number) {
    // this.service.data = { ...this.dataSource[index]};
    // this.router.navigate(['payment-form']);
  }

  payment(index: number) {
    // this.service.data = { ...this.dataSource[index]};
    // this.router.navigate(['payment-form']);
  }

  print(order: any) {
    sessionStorage.setItem('invoiceData', JSON.stringify(order));
    this.router.navigate(['/dashboard/invoice']);
  }

}
