export interface IFilterAttribute {
    attrName?: string;
    attrValue?: string;
}

export class FilterAttribute implements IFilterAttribute {
    attrName: string;
    attrValue: string;
}
