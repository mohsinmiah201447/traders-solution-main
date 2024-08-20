import { ApprovableEntity } from "../super-model/approvable.model";
import { Permission } from "./permission.model";

export interface Role extends ApprovableEntity {
    name?: string;
    permissions?: Permission[];
}