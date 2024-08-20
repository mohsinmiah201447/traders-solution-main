import { BaseModel } from "../super-model/base.model";

export interface Notification extends BaseModel {
    recipient?:String;
    message?:String;
    notificationType?:String;
    timestamp?:String;
    status?:String;
    linkURL?:String;
    associatedEntity?:String;
    senderUserID?:String;
    priorityLevel?:String;
    readTimestamp?:String;
    expirationDate?:Date;
    additionalMetadata?:String;
}
