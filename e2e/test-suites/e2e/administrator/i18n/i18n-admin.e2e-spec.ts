import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { I18nPageConstant } from '../../../../page-objects/pages/administration/i18n/i18n-page.constant';
import { I18nPageHelper } from '../../../../page-objects/pages/administration/i18n/i18n-page.helper';
import { CommonPageHelper } from '../../../../page-objects/pages/common/common-page.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login/login-page.helper';
import { DashboardPageHelper } from '../../../../page-objects/pages/status/dashboard/dashboard-page.helper';
import { SuiteNames } from '../../../helpers/suite-names';

describe(SuiteNames.e2eTestSuite, () => {

    beforeEach(async () => {
        await PageHelper.maximizeWindow();

        StepLogger.stepId(1);
        StepLogger.step('Enter the below URL in the browser');
        StepLogger.verification('System should launch the SENSAGE application login page');
        await new LoginPageHelper().goTo();
    });

    afterEach(async () => {
        await CommonPageHelper.logout();
        await LoginPageHelper.verifyNavigation();
    });

    // Jira References - SNSGCID-48912,SNSGCID-54047
    it('Verify user is able to navigate to the i18n screen - [15400494]', async () => {
        // Auto generated by aurea-automation - util on Mon, 01 Oct 2018 11:48:51 GMT

        StepLogger.caseId = 15400494;

        StepLogger.stepId(2);
        StepLogger.step(`Enter valid Username and Password for admin user in the login page
         and click on Login button
         Username: admin
         Password: changeme`);
        await LoginPageHelper.loginUsingAdmin();
        StepLogger.verification('System should allow the user to successfully log into the application and should default to Dashboard page.');
        await DashboardPageHelper.verifyNavigation();

        StepLogger.stepId(3);
        StepLogger.step('Expand the Administration menu and click on i18n');
        await I18nPageHelper.goTo();
        StepLogger.verification('Manage Locales and Translations screen should be displayed');
        await I18nPageHelper.verifyNavigation();
    });

    // Jira References - SNSGCID-48912,SNSGCID-54047
    it('Verify user is able to open a folder under Modules by double clicking - [15400495]', async () => {
        // Auto generated by aurea-automation - util on Mon, 01 Oct 2018 11:48:51 GMT

        StepLogger.caseId = 15400495;

        StepLogger.stepId(2);
        StepLogger.step(`Enter valid Username and Password for admin user in the login page
        and click on Login button
        Username: admin
        Password: changeme`);
        await LoginPageHelper.loginUsingAdmin();
        StepLogger.verification('System should allow the user to successfully log into the application and should default to Dashboard page.');
        await DashboardPageHelper.verifyNavigation();

        StepLogger.stepId(3);
        StepLogger.step('Expand the Administration menu and click on i18n');
        await I18nPageHelper.goTo();

        StepLogger.verification('Manage Locales and Translations screen should be displayed');
        await I18nPageHelper.verifyNavigation();

        StepLogger.stepId(4);
        StepLogger.step('Click on a folder under the heading module');
        const i18nAgreement = I18nPageConstant.modules.agreement;
        await I18nPageHelper.doubleClickOnModules(i18nAgreement);

        StepLogger.verification('Then system display Files under the opened folder');
        await I18nPageHelper.verifyFileUnderOpenedFolderDisplayed(i18nAgreement);

        StepLogger.stepId(5);
        StepLogger.step('Click on text label beside the file icon in the module folder ');
        await I18nPageHelper.clickOnFileUnderOpenedFolder(i18nAgreement);

        StepLogger.verification('Verify that system should open the file and display the content in the right side of the file ');
        await I18nPageHelper.verifyFilesOpenedAndDisplayContent();
    });
});
