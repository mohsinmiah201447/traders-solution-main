import { Page } from "./page.dto";

export interface AppResponse<T> {
    status: string;
    message: string | null;
    data: T;
}
