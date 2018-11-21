
import { RoleView } from './role-view.model';

export interface ISiemResponseListRoleView {
    data?: Array<RoleView>;
    httpResponseCode?: number;
    siemAppErrorCode?: string;
    message?: string;
}

export class SiemResponseListRoleView implements ISiemResponseListRoleView {
    data: Array<RoleView>;
    httpResponseCode: number;
    siemAppErrorCode: string;
    message: string;
}
