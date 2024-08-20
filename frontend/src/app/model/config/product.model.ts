import { AuditAbleModel } from '../super-model/auditable.model';
import { Supplier } from './supplier.model';

export interface Product extends AuditAbleModel {
  unitPrice: number;
  id?:number
   pid?:string;
  name?:string;
  description?:string;
  purchaseprice?:number;
  sellingprice?:number;
  quantityInStock?: number;
  supplier?:Supplier;
  category?:string;


}

export interface InvoiceEntry {
  id?: number;
  productId?: string;
  productName?: string;
  quantity?: number;
  unitPrice?: number;
  selected?: boolean;
}
