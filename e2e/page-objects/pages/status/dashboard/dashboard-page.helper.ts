import { StepLogger } from '../../../../../core/logger/step-logger';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { BasePageHelper } from '../../base-page.helper';

import { DashboardPageConstant } from './dashboard-page.constant';
import { DashboardPage } from './dashboard.po';

export class DashboardPageHelper extends BasePageHelper {

    static async verifyNavigation() {
        StepLogger.verification('Dashboard page is displayed.');
        await ExpectationHelper.verifyPageNavigation(DashboardPage.mainContainer, DashboardPageConstant.pageName);
    }

    url(): string {
        return '/admin/#dashboard';
    }
}
