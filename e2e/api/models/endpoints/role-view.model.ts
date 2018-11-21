
import { PermissionView } from './permission-view.model';

export interface IRoleView {
    id?: number;
    name?: string;
    permissions?: Array<PermissionView>;
}

export class RoleView implements IRoleView {
    id: number;
    name: string;
    permissions: Array<PermissionView>;
}
