import { element, By } from 'protractor';

import { ButtonHelper } from '../../../components/html/button-helper';
import { ElementHelper } from '../../../components/html/element-helper';

import { LoginPageConstant } from './login-page.constant';

export class LoginPage {
    static get mainContainer() {
        return element(By.css(LoginPageConstant.tagName));
    }

    static get formControls() {
        const names = LoginPageConstant.formControlNames;
        return {
            username: element(By.name(names.username)),
            password: element(By.name(names.password)),
            login: ButtonHelper.getButtonByText(names.login)
        };
    }

    static get loginErrors() {
        return {
            invalidCredentials: ElementHelper.getElementByText(LoginPageConstant.loginErrors.invalidCredentials)
        };
    }
}
