import { CommonApiConstant } from '../../api-helpers/common/common-api.constant';

export class RolesEndpoint {

    /**
     * Retrieves all the registries
     * Creates a new registry
     * Get - SiemResponseListRoleView
     * Post - SiemResponseRoleView
     */
    static readonly root = `${CommonApiConstant.endpointPrefix}/roles`;

    /**
     * search of registries when submit a POST request
     * Post - SiemResponseListRoleView
     */
    static readonly rolesSearch = `${RolesEndpoint.root}/search`;

    static withId(id: number) {
        return `${this.root}/${id}`;
    }
}
