import { browser } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';

import { CommonPage } from './common.po';

export class CommonPageHelper {
    static getPageTag(pageName: string) {
        return `app-${pageName
            .toLowerCase()
            .replace(/ /g, '-')
            .toLowerCase()}`;
    }

    static async logout() {
        StepLogger.step('Select logout from the profile icon from the right top corner of the application');
        // It takes a little time to apear, we can't wait for element as it might be or might not be present
        await browser.sleep(PageHelper.timeout.xs);

        await PageHelper.click(CommonPage.userProfile);
        await PageHelper.click(CommonPage.profileOptions.logOut);
    }
}
