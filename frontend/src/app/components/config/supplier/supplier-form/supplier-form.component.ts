import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Supplier } from '../../../../model/config/supplier.model';
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit {
  supplierForm!: FormGroup;
  controls: any = {
    "name": new FormControl('', []),
    "contactName": new FormControl('', []),
    "contactTitle": new FormControl('', []),
    "phoneNumber": new FormControl('', []),
    "emailAddress": new FormControl('', []),
    "address": new FormControl('', []),
    "billingAddress": new FormControl('', []),
    "paymentTerms": new FormControl('', []),
    "paymentMethod": new FormControl('', []),
    "tin": new FormControl('', []),
    "website": new FormControl('', []),
    "productCategories": new FormControl('', []),
    "supplierRating": new FormControl('', []),
    "agreements": new FormControl('', []),
    "preferredSupplier": new FormControl('', []),
    "leadTime": new FormControl('', []),
    "minimumOrderQuantity": new FormControl('', []),
    
  };
  submitted = false;
  endPoint = "supplier";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: CrudService,private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {      
      populateFormControl(this.supplierForm.controls, this.data);
    }
  }

  createForm() {
    this.supplierForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.supplierForm.invalid) {
      return;
    }
    const supplierData: Supplier = { ...this.supplierForm.value };
    this.service.save(supplierData, this.endPoint).subscribe(response => {
      this.supplierForm.reset();
      this.submitted = false;
      this.router.navigate(['supplier-list']);
    });
  }
}
