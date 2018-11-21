import { CommonPageHelper } from '../common/common-page.helper';

export class LoginPageConstant {
    static readonly pageName = 'Login';
    static readonly tagName = CommonPageHelper.getPageTag(LoginPageConstant.pageName);

    static get formControlNames() {
        return {
            username: 'username',
            password: 'password',
            login: 'Login'
        };
    }

    static get loginErrors() {
        return {
            invalidCredentials: 'Invalid username or password'
        };
    }
}
