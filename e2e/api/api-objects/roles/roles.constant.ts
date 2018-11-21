import { SearchRequest } from '../../models/endpoints/search-request.model';

export class RolesConstant {

    static searchRequestBody: SearchRequest = {
        summary: true,
        offset: 0,
        limit: 0,
        sortAttrNames: null,
        sortDirections: null,
        attributeFilters: [
            {
                attrName: null,
                attrValue: null
            }
        ]
    };
}
