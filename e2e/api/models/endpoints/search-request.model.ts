
import { FilterAttribute } from './filter-attribute.model';

export interface ISearchRequest {
    summary?: boolean;
    offset?: number;
    limit?: number;
    sortAttrNames?: string;
    sortDirections?: string;
    attributeFilters?: Array<FilterAttribute>;
}

export class SearchRequest implements ISearchRequest {
    summary: boolean;
    offset: number;
    limit: number;
    sortAttrNames: string;
    sortDirections: string;
    attributeFilters: Array<FilterAttribute>;
}
