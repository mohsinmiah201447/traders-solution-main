import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  private orderItems: any[] = [];

  constructor() { }

  setOrderItems(items: any[]) {
    this.orderItems = items;
  }

  getOrderItems() {
    return this.orderItems;
  }
}

