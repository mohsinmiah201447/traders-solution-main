import { Employee } from '../config/employee.model';
import { AuditAbleModel } from '../super-model/auditable.model';
import { OrderItem } from './order-item.model';

export interface Order extends AuditAbleModel {
  OrderDate?: Date;
  customer?: String;
  employee?: Employee;
  orderItems?:Number   //OrderItem[];
  paymentMethod?: String;
  paymentDate?: Date;
  shippingAddress?: String;
  billingAddress?: String;
  orderStatus?: String;
  totalAmount?: Number;
  taxAmount?: Number;
  discountAmount?: Number;
  shippingFee?: Number;
  invoiceReceiptNumber?: Number;
  notesComments?: String;
  deliveryDate?: Date;
  returnExchangeRequest?: String;
  returnExchangeDate?: Date;
}
