import { AuditAbleModel } from "../super-model/auditable.model";
import { Employee } from "./employee.model";

export interface Departments extends AuditAbleModel {
    name?:String;
    manager?:String;  //employee
    location?:String;
}
