import { nameof } from 'ts-simple-nameof';

import { StepLogger } from '../../../../core/logger/step-logger';
import { CommonApiConstant } from '../../../api/api-helpers/common/common-api.constant';
import { ApiInvoker } from '../../../api/api-invokers/api-invoker';
import { RolesConstant } from '../../../api/api-objects/roles/roles.constant';
import { RolesEndpoint } from '../../../api/api-objects/roles/roles.endpoint';
import { PermissionView } from '../../../api/models/endpoints/permission-view.model';
import { RoleView } from '../../../api/models/endpoints/role-view.model';
import { SiemResponseListRoleView } from '../../../api/models/endpoints/siem-response-list-role-view.model';
import { SiemResponseRoleView } from '../../../api/models/endpoints/siem-response-role-view.model';
import { PageHelper } from '../../../components/html/page-helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.e2eTestSuite, () => {

    let role: RoleView;

    it('T1 - Verify user is able to Retrieve all the registries - [15997231]', async () => {
        StepLogger.caseId = 15997231;
        const result = await new ApiInvoker().get<SiemResponseListRoleView>(RolesEndpoint.root);
        const datas = result.data;

        // Verify top fields
        expect(result.httpResponseCode)
            .toBe(CommonApiConstant.httpStatusCodes.success,
                nameof<SiemResponseListRoleView>(o => o.httpResponseCode));

        expect(result.siemAppErrorCode)
            .toBeNull(nameof<SiemResponseListRoleView>(o => o.siemAppErrorCode));

        expect(result.message)
            .toBeNull(nameof<SiemResponseListRoleView>(o => o.message));

        // Verify the data
        expect(datas.length)
            .toBeGreaterThan(0, nameof<SiemResponseListRoleView>(o => o.data));
        role = datas[0];
        for (const userRole of datas) {
            expect(userRole.id)
                .toBeGreaterThan(0, nameof<RoleView>(o => o.id));
            expect(userRole.name.length)
                .toBeGreaterThan(0, nameof<RoleView>(o => o.name));

            for (const permission of userRole.permissions) {
                const permissionsIndex = `Verify permissions with name ${permission.name} - `;
                expect(permission.id)
                    .toBeGreaterThan(0,
                        `${permissionsIndex}${nameof<PermissionView>(o => o.id)}`);

                expect(permission.name.length)
                    .toBeGreaterThan(0,
                        `${permissionsIndex}${nameof<PermissionView>(o => o.name)}`);

                expect(permission.value.length)
                    .toBeGreaterThan(0,
                        `${permissionsIndex}${nameof<PermissionView>(o => o.value)}`);
            }
        }
    });

    it('T2 - Verify user is able to Create a new registry - [15997411]', async () => {
        StepLogger.caseId = 15997411;
        role.id = 0;
        role.name = PageHelper.getUniqueId();
        const result = await new ApiInvoker().post<SiemResponseRoleView>(RolesEndpoint.root, role);
        const data = result.data;
        role.id = data.id;

        // Verify top fields
        expect(result.httpResponseCode)
            .toBe(CommonApiConstant.httpStatusCodes.created,
                nameof<SiemResponseRoleView>(o => o.httpResponseCode));

        expect(result.siemAppErrorCode)
            .toBeNull(nameof<SiemResponseRoleView>(o => o.siemAppErrorCode));

        expect(result.message)
            .toBeNull(nameof<SiemResponseRoleView>(o => o.message));

        // Verify the data
        expect(data)
            .not.toBeNull(nameof<SiemResponseRoleView>(o => o.data));

        expect(data.id)
            .toBeGreaterThan(0, nameof<RoleView>(o => o.id));

        expect(data.name)
            .toBe(role.name, nameof<RoleView>(o => o.name));

        expect(data.permissions)
            .toEqual(data.permissions, nameof<RoleView>(o => o.name));
    });

    it('T3 - Verify user is able to Retrieve the registry that matches the passed Id - [15997237]', async () => {
        StepLogger.caseId = 15997237;

        const result = await new ApiInvoker().get<SiemResponseRoleView>(RolesEndpoint.withId(role.id));
        const data = result.data;

        // Verify top fields
        expect(result.httpResponseCode)
            .toBe(CommonApiConstant.httpStatusCodes.success,
                nameof<SiemResponseRoleView>(o => o.httpResponseCode));

        expect(result.siemAppErrorCode)
            .toBeNull(nameof<SiemResponseRoleView>(o => o.siemAppErrorCode));

        expect(result.message)
            .toBeNull(nameof<SiemResponseRoleView>(o => o.message));

        // Verify the data
        expect(data)
            .not.toBeNull(nameof<SiemResponseRoleView>(o => o.data));

        expect(data.id)
            .toBe(role.id, nameof<RoleView>(o => o.id));

        expect(data.name)
            .toBe(role.name, nameof<RoleView>(o => o.name));

        expect(data.permissions)
            .toEqual(data.permissions, nameof<RoleView>(o => o.name));
    });

    it('T4 - Verify user is able to Update the registry that matches the passed Id - [15997464]', async () => {
        StepLogger.caseId = 15997464;
        role.name = PageHelper.getUniqueId();
        const result = await new ApiInvoker().put<SiemResponseRoleView>(RolesEndpoint.withId(role.id), role);
        const data = result.data;
        // Verify top fields
        expect(result.httpResponseCode)
            .toBe(CommonApiConstant.httpStatusCodes.success,
                nameof<SiemResponseRoleView>(o => o.httpResponseCode));

        expect(result.siemAppErrorCode)
            .toBeNull(nameof<SiemResponseRoleView>(o => o.siemAppErrorCode));

        expect(result.message)
            .toBeNull(nameof<SiemResponseRoleView>(o => o.message));

        // Verify the data
        expect(data)
            .not.toBeNull(nameof<SiemResponseRoleView>(o => o.data));

        expect(data.id)
            .toBe(role.id, nameof<RoleView>(o => o.id));

        expect(data.name)
            .toBe(role.name, nameof<RoleView>(o => o.name));

        expect(data.permissions)
            .toEqual(role.permissions, nameof<RoleView>(o => o.permissions));
    });

    it('T5 - Verify user is able to Delete a registry that matches the passed Id - [15997491]', async () => {
        StepLogger.caseId = 15997491;
        const result = await new ApiInvoker().delete<SiemResponseListRoleView>(RolesEndpoint.withId(role.id));
        const data = result.data;

        // Verify top fields
        expect(result.httpResponseCode)
            .toBe(CommonApiConstant.httpStatusCodes.success,
                nameof<SiemResponseRoleView>(o => o.httpResponseCode));

        expect(result.siemAppErrorCode)
            .toBeNull(nameof<SiemResponseRoleView>(o => o.siemAppErrorCode));

        expect(result.message)
            .toBeNull(nameof<SiemResponseRoleView>(o => o.message));

        // Verify the data
        expect(data)
            .toBeNull(nameof<SiemResponseRoleView>(o => o.data));
    });

    it('T6 - Verify user is able to Perform a search of registries - [15997459]', async () => {
        StepLogger.caseId = 15997459;
        // searching roles
        const response = await new ApiInvoker().post<SiemResponseListRoleView>(
            RolesEndpoint.rolesSearch, RolesConstant.searchRequestBody);
        const datas = response.data;

        // Verify the data
        expect(datas.length)
            .toBeGreaterThan(0, nameof<SiemResponseRoleView>(o => o.data));

        for (const userRole of datas) {
            expect(userRole.id)
                .toBeGreaterThan(0, nameof<RoleView>(o => o.id));
            expect(userRole.name.length)
                .toBeGreaterThan(0, nameof<RoleView>(o => o.name));

            for (const permission of userRole.permissions) {
                const permissionsIndex = `Verify permissions with name ${permission.name} - `;
                expect(permission.id)
                    .toBeGreaterThan(0,
                        `${permissionsIndex}${nameof<PermissionView>(o => o.id)}`);

                expect(permission.name.length)
                    .toBeGreaterThan(0,
                        `${permissionsIndex}${nameof<PermissionView>(o => o.name)}`);

                expect(permission.value.length)
                    .toBeGreaterThan(0,
                        `${permissionsIndex}${nameof<PermissionView>(o => o.value)}`);
            }
        }
    });
});
