import { Product } from '../config/product.model';

export interface OrderItem {
  quantityInStock: number;
  id?: Number;
  product: Product;
  quantity: Number;
  amount: Number;
}
