import { AuditAbleModel } from "../super-model/auditable.model";

export interface Supplier extends AuditAbleModel {
    name?:String;
    contactName?:String;
    contactTitle?:String;
    phoneNumber?:Number;
    emailAddress?:String;
    address?:String;
    billingAddress?:String;
    paymentTerms?:String;
    paymentMethod?:String;
    tin?:Number;
    website?:String;
    productCategories?:String;
    supplierRating?:String;
    agreements?:String;
    preferredSupplier?:String;
    leadTime?:Number;
    minimumOrderQuantity?:Number;
}