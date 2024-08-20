import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Purchase } from '../../../../model/data/purchase.model';
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/model/config/supplier.model';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent implements OnInit {
  purchaseForm!: FormGroup;
  controls: any = {
    "product": new FormControl('', []),
    "costPrice": new FormControl('', []),
    "vat": new FormControl('', []),
    "discount": new FormControl('', []),
    "quantity": new FormControl('', []),
    "weight": new FormControl('', []),
    "total": new FormControl('', []),
    "supplier": new FormControl('', []),
    "purchaseDate": new FormControl('', []),
    "attachments": new FormControl('', [])

  };
  submitted = false;
  endPoint = "purchase";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: CrudService, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.purchaseForm.controls, this.data);
    }
  }

  createForm() {
    this.purchaseForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.purchaseForm.invalid) {
      return;
    }
    const supplier: Supplier = { id:Number(this.purchaseForm.value.supplier) };
    const purchaseData: Purchase = { ...this.purchaseForm.value,supplier:null };
    this.service.save(purchaseData, this.endPoint).subscribe(response => {
      this.purchaseForm.reset();
      this.submitted = false;
      this.router.navigate(['purchase-list']);
    });
  }
}

