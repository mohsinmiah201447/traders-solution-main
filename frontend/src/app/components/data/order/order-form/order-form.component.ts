import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/config/customer.model';
import { Product } from 'src/app/model/config/product.model';
import { CrudService } from '../../../../services/crud.service';
import { OrderDataService } from 'src/app/shared/order-data.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {

  selectedProduct: Product | undefined = undefined;
  selectedCustomer: Customer | undefined = undefined;
  entries: any[] = [];
  allSelected: boolean = false;

  quantity?: number;
  customer = 0;
  products: Product[] = [];
  orders: any = {};
  submitted = false;
  endPoint = 'order';
  data?: any = {};
  orderDate!: string | number | Date;
  invoiceId: any;
  customers: Customer[] = [];
  productId: any;
  discountAmount: number = 0;
  paymentAmount: number = 0;
  shippingAddress: any;

  constructor(
    private service: CrudService,
    private router: Router,
    private orderDataService: OrderDataService
  ) { }

  ngOnInit() {
    this.service.getList('customer', 0, 999999999).subscribe((res: any) => {
      const page = res?.data;
      this.customers = page.content;

      this.service.getList('product', 0, 999999999).subscribe((res: any) => {
        const page = res?.data;
        this.products = page.content;
      });
    });

    this.invoiceId = Math.floor(Math.random() * 1000000);
    this.orderDate = new Date();
  }

  onProductChange() {
    const index = this.products.findIndex((product: Product) => product.id == this.productId);
    this.selectedProduct = this.products[index];
  }

  addEntry() {
    const entry = {
      product: this.selectedProduct,
      quantity: this.quantity,
      price: this.selectedProduct?.unitPrice,
      selected: false
    };
    this.entries.push(entry);
  }

  deleteSelectedEntries() {
    this.entries = this.entries.filter(entry => !entry.selected);
  }

  getGrandTotal(): number {
    return this.entries.reduce((sum, entry) => {
      const unitPrice = entry.price ?? 0;
      const quantity = entry.quantity ?? 0;
      return sum + (unitPrice * quantity);
    }, 0);
  }

  getDiscount(): number {
    return this.discountAmount;
  }

  getDueAmount(): number {
    const total = this.getGrandTotal() - this.getDiscount();
    return total - this.paymentAmount;
  }

  submitForm() {
    const orderData = {
      invoiceReceiptNumber: this.invoiceId,
      customer: { id: this.customer },
      shippingAddress: this.shippingAddress,
      orderItems: this.entries,
      grandTotal: this.getGrandTotal(),
      discountAmount: this.getDiscount(),
      paymentAmount: this.paymentAmount,
      dueAmount: this.getDueAmount(),
    }

    this.service.save(orderData, 'order').subscribe((res: any) => {
      if (res.status === 'SUCCESS') {
        this.router.navigate(['/dashboard/order-list']);
      } else {
        alert(res.message);
      }
    });
  }
}
