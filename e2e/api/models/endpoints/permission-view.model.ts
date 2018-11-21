export interface IPermissionView {
    id?: number;
    name?: string;
    value?: string;
}

export class PermissionView implements IPermissionView {
    id: number;
    name: string;
    value: string;
}
