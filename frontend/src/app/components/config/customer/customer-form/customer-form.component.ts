import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Customer } from '../../../../model/config/customer.model';
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm!: FormGroup;
  controls: any = {
    "firstName": new FormControl('', []),
    "lastName": new FormControl('', []),
    "email": new FormControl('', []),
    "phone": new FormControl('', []),
    "address": new FormControl('', []),
    "billingAddress": new FormControl('', []),
    "companyName": new FormControl('', []),
    "tin": new FormControl('', []),
    "dateOfRegistration": new FormControl('', []),
    "customerCategory": new FormControl('', []),
    "creditLimit": new FormControl(0, []),
  };
  submitted = false;
  endPoint = "customer";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: CrudService,private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.customerForm.controls, this.data);
    }
  }

  createForm() {
    this.customerForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }
    const customerData: Customer = { ...this.customerForm.value };
    this.service.save(customerData, this.endPoint).subscribe(response => {
      this.customerForm.reset();
      this.submitted = false;
      this.router.navigate(['/dashboard/customer-list']);
    });

  }
}
