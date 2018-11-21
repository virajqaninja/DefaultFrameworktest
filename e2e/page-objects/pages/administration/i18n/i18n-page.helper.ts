import { StepLogger } from '../../../../../core/logger/step-logger';
import { ElementHelper } from '../../../../components/html/element-helper';
import { PageHelper } from '../../../../components/html/page-helper';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { ValidationsHelper } from '../../../../components/misc-utils/validation-helper';
import { BasePageHelper } from '../../base-page.helper';
import { CommonPage } from '../../common/common.po';
import { AdministrationHelper } from '../administration.helper';

import { I18nPageConstant } from './i18n-page.constant';
import { I18nPage } from './i18n.po';

export class I18nPageHelper extends BasePageHelper {
    static async verifyNavigation() {
        await ExpectationHelper.verifyDisplayedStatus(I18nPage.mainContainer,
            ValidationsHelper.getPageDisplayedValidation(I18nPageConstant.pageName));
    }

    static async goTo() {
        StepLogger.subStep('Click on Administration');
        await AdministrationHelper.goToParentPageForChildNavigation();

        StepLogger.subStep('Click on "I18n" menu');
        await PageHelper.click(CommonPage.sidebarNavigationMenus.administration.child.i18n);
    }

    static async doubleClickOnModules(moduleName: string) {
        StepLogger.step(`Double click on a folder under the heading module named: ${moduleName}`);
        const rootFolderOfModule = I18nPage.getFolderByName(moduleName);
        await PageHelper.click(rootFolderOfModule);
        await ElementHelper.actionDoubleClick(rootFolderOfModule);
    }

    static async verifyFileUnderOpenedFolderDisplayed(fileName: string) {
        await ExpectationHelper.verifyDisplayedStatus(I18nPage.getFileByName(fileName), fileName);
    }

    static async verifyFilesOpenedAndDisplayContent() {
        await ExpectationHelper.verifyDisplayedStatus(I18nPage.moduleContent.fileModuleContent,
            I18nPageConstant.moduleFileContent);
    }

    static async clickOnFileUnderOpenedFolder(fileName: string) {
        StepLogger.step(`Click on text label named ${fileName} beside the file icon in the module folder`);
        await PageHelper.click(I18nPage.getFileByName(fileName));
    }

    url(): string {
        return '/analyzer/administration/groups';
    }
}
