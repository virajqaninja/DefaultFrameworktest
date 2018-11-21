import { ComponentHelpersFactory } from '@aurea/protractor-automation-helper';
import { element, By } from 'protractor';

export class ComponentHelpers extends ComponentHelpersFactory {
    static getXPathFunctionForDot(text: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForDot(text, isContains)
            .replace('=\'', '="').slice(0, -1) + '"';
    }

    static getElementByTag(tag: string, text: string, isContains = false) {
        return element(By.xpath(this.getElementByTagXpath(tag, text, isContains)));
    }

    static getElementByTagXpath(tag: string, text: string, isContains = false) {
        return `//${tag}[${ComponentHelpers.getXPathFunctionForDot(text, isContains)}]`;
    }
}
