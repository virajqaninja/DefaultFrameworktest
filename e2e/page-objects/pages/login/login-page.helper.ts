
import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { TextBoxHelper } from '../../../components/html/textbox-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { BasePageHelper } from '../base-page.helper';
import { CommonPageConstant } from '../common/common-page.constant';
import { CommonPage } from '../common/common.po';

import { LoginPageConstant } from './login-page.constant';
import { LoginPage } from './login.po';

export class LoginPageHelper extends BasePageHelper {
    static readonly admin = CommonPageConstant.credentials.administrator;

    static async login(username: string, password: string) {
        await this.verifyNavigation();

        StepLogger.subStep(`Enter Username ${username}`);
        await TextBoxHelper.sendKeys(LoginPage.formControls.username, username);

        StepLogger.subStep(`Enter Password and press enter ${password}`);
        await TextBoxHelper.sendKeys(LoginPage.formControls.password, password, true);
    }

    static async verifyNavigation() {
        StepLogger.verification('System should launch the SENSAGE application login page');
        await ExpectationHelper.verifyPageNavigation(LoginPage.mainContainer, LoginPageConstant.pageName);
    }

    static async logout() {
        StepLogger.step('Click on logout under menu present at the top right corner.');
        await PageHelper.click(CommonPage.userProfile);
        await PageHelper.click(CommonPage.profileOptions.logOut);
    }

    static async loginUsingAdmin() {
        await this.login(this.admin.username, this.admin.password);
    }

    async goTo() {
        return this.get(this.url());
    }

    url(): string {
        return '/analyzer';
    }
}
