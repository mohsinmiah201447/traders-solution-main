import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Customer } from 'src/app/model/config/customer.model';
import { CrudService } from 'src/app/services/crud.service';
import { Page } from 'src/app/dto/page.dto';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'address', 'billingAddress', 'companyName', 'tin', 'dateOfRegistration', 'customerCategory', 'creditLimit', 'actions'];
  dataSource: Customer[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('customer').subscribe((res: AppResponse<Page>) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "customer").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/customer-form']);
  }



}

