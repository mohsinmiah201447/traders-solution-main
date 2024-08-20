import { Product } from "../config/product.model";
import { Supplier } from "../config/supplier.model";
import { AuditAbleModel } from "../super-model/auditable.model";

export interface Purchase extends AuditAbleModel {
    product?:String;
    costPrice?:Number;
    vat?: Number;
    discount?: Number;
    quantity?: Number;
    weight?: Number;
    total?: Number;
    supplier?:Supplier;
    purchaseDate?:Date;
    attachments?:String;
}
