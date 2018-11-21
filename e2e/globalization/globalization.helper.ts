import { browser } from 'protractor';

export class GlobalizationHelper {
    static get language(): String {
        return browser.params.language;
    }
}
