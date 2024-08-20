import { AuditAbleModel } from "../super-model/auditable.model";

export interface Customer extends AuditAbleModel {
    firstName?:String;
    lastName?:String;
    email?:String;
    phone?:Number;
    address?:String;
    billingAddress?:String;
    companyName?:String;
    tin?:String;
    dateOfRegistration?:Date;
    customerCategory?:String;
    creditLimit ?:String;
}