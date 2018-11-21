import { CommonApiConstant } from '../../api-helpers/common/common-api.constant';

export class UsersEndpoint {
    /**
     * Retrieves all users
     * Get - SiemResponseContentResult
     */
    static readonly root = CommonApiConstant.endpointPrefix + '/users';
    static readonly content = UsersEndpoint.root + '/home/content';
    static readonly password = UsersEndpoint.root + '/password';
    static readonly search = UsersEndpoint.root + '/search';

    /**
     * get users/names using GET request
     * Get - SiemResponseListMapStringString
     */
    static readonly usersNames = `${UsersEndpoint.root}/names`;

    /**
     * export users/home/content/ using POST request
     * POST - SiemResponseMapStringString
     */
    static readonly exportUsersContent = `${UsersEndpoint.content}/export`;

    /**
     * update users/group/{groupId} using PUT request
     * PUT - SiemResponseListUserView
     */
    static usersGroup(groupId: number) {
        return `${this.root}/group/${groupId}`;
    }

    /**
     * update users/role/{roleId} using PUT request
     * PUT - SiemResponseListUserView
     */
    static usersRole(roleId: number) {
        return `${this.root}/role/${roleId}`;
    }

    /**
     * get users using GET /users/{id} request
     * update user using PUT /users/{id} request
     * GET - SiemResponseUserView
     * PUT - SiemResponseUserView
     */
    static userByUserId(userId: number) {
        return `${this.root}/${userId}`;
    }

    static getBuildByFileName(fileName: string) {
        return `${UsersEndpoint.content}/${fileName}/build`;
    }

    static getLoadByFileName(fileName: string) {
        return `${UsersEndpoint.content}/${fileName}/load`;
    }

    static usersContentFile(fileName: string) {
        return `${UsersEndpoint.content}/${fileName}`;
    }
}
