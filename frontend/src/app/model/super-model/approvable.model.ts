import { BaseModel } from "./base.model";

export interface ApprovableEntity extends BaseModel {
    approved?: boolean;
    approvedBy?: string;
    denialReason?: string;
    approvedAt?: Date;
}
