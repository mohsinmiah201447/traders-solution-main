import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../../../model/config/product.model';
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  controls: any = {
    "name": new FormControl('', []),
    "sku": new FormControl('', []),
    "category": new FormControl('', []),
    "brand": new FormControl('', []),
    "unitPrice": new FormControl('', []),
    "costPrice": new FormControl('', []),
    "quantityInStock": new FormControl('', []),
    "reorderPoint": new FormControl('', []),
    "supplierID": new FormControl('', []),
    "purchaseDate": new FormControl('', []),
    "expirationDate": new FormControl('', []),
    "location": new FormControl('', []),
    "barcode": new FormControl('', []),
    "serialNumber": new FormControl('', []),
    "condition": new FormControl('', []),
    "weight": new FormControl('', []),
    "dimensions": new FormControl('', []),
    "taxRate": new FormControl('', []),
    "minimumOrderQuantity": new FormControl('', []),
    "discounts": new FormControl('', []),
    "images": new FormControl('', []),
    "attachments": new FormControl('', []),

  };
  submitted = false;
  endPoint = "product";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: CrudService,private router:Router) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {      
      populateFormControl(this.productForm.controls, this.data);
    }
  }

  createForm() {
    this.productForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }
    const productData: Product = { ...this.productForm.value };
    this.service.save(productData, this.endPoint).subscribe(response => {
      this.productForm.reset();
      this.submitted = false;
      this.router.navigate(['product-list']);
    });
  }
}

