// tslint:disable-next-line:max-line-length
import { ButtonComponentSelectorsFactory } from '@aurea/protractor-automation-helper';
import { element, By } from 'protractor';

export class ButtonComponentSelectors extends ButtonComponentSelectorsFactory {

    static getItem(label: string, isContains = false, insidePopup = false) {
        const xpath = ButtonComponentSelectors.getButtonByLabelXpath(label, isContains, insidePopup);
        return element(By.xpath(xpath));
    }
}
