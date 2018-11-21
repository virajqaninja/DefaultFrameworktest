import { element, By } from 'protractor';

import { CommonPage } from '../../common/common.po';

import { DashboardPageConstant } from './dashboard-page.constant';

export class DashboardPage {
    static get system() {
        return {
            version: element(By.name('k_version')),
        };
    }

    static get mainContainer() {
        return CommonPage.getActiveMenuItem(DashboardPageConstant.pageName);
    }
}
