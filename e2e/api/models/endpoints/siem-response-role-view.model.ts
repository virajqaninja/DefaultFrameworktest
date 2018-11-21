
import { RoleView } from './role-view.model';

export interface ISiemResponseRoleView {
    data?: RoleView;
    httpResponseCode?: number;
    siemAppErrorCode?: string;
    message?: string;
}

export class SiemResponseRoleView implements ISiemResponseRoleView {
    data: RoleView;
    httpResponseCode: number;
    siemAppErrorCode: string;
    message: string;
}
