import { StepLogger } from '../../../../core/logger/step-logger';
import { ElementHelper } from '../../../components/html/element-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { CommonPage } from '../common/common.po';

export class AdministrationHelper {
    static async goToParentPageForChildNavigation() {
        const childMenu = CommonPage.sidebarNavigationMenus.administration.child.analytics;
        if (!(await childMenu.isPresent() && await childMenu.isDisplayed())) {
            await this.navigate();
        }
    }

    static async navigate() {
        StepLogger.step("Go to 'Administration' Page");
        await WaitHelper.waitForElementToBeHidden(CommonPage.loadingContainer);
        await ElementHelper.clickUsingJs(CommonPage.sidebarNavigationMenus.administration.root);
    }
}
