import { ButtonHelperFactory } from '@aurea/protractor-automation-helper';
import { element, By } from 'protractor';

export class ButtonHelper extends ButtonHelperFactory {
    static getButtonByText(text: string, isContains = false) {
        return element(By.xpath(ButtonHelper.getButtonByExactTextXPath(text, isContains)));
    }
}
