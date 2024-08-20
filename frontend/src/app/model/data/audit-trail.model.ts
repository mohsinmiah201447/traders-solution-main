import { AuditAbleModel } from "../super-model/auditable.model";

export interface AuditTrail extends AuditAbleModel {
    timestamp?:String;
    actionEventType?:String;
    userSystem?:String;
    affectedEntity?:String;
    iPAddress?:String;
    userAgent?:String;
    statusOutcome?:String;
    additionalMetadata?:String;
}