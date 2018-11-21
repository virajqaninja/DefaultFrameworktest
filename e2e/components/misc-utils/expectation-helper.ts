import { browser, ElementFinder } from 'protractor';

import { StepLogger } from '../../../core/logger/step-logger';
import { CheckboxHelper } from '../html/checkbox-helper';
import { ElementHelper } from '../html/element-helper';
import { PageHelper } from '../html/page-helper';

import { ValidationsHelper } from './validation-helper';

export class ExpectationHelper {
    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param refresh
     * @returns {Promise<void>}
     */
    static async verifyDisplayedStatus(targetElement: ElementFinder, elementName: string, refresh = true) {
        StepLogger.verification(`${elementName} should display`);
        const isDisplayed = await PageHelper.isElementDisplayed(targetElement);
        if (!isDisplayed && refresh) {
            await browser.refresh();
            await this.verifyDisplayedStatus(targetElement, elementName, false);
            return;
        }
        await expect(await PageHelper.isElementDisplayed(targetElement))
            .toBe(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifyPageNavigation(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`Page - ${elementName} should display`);
        await expect(await PageHelper.isElementDisplayed(targetElement))
            .toBe(true,
                ValidationsHelper.getPageDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifyNotDisplayedStatus(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should not display`);
        await expect(await PageHelper.isElementPresent(targetElement, false))
            .toBe(false, ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifyElementPresentStatus(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should present`);
        await expect(await PageHelper.isElementPresent(targetElement))
            .toBe(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is hidden or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param toWait
     * @returns {Promise<void>}
     */
    static async verifyHiddenStatus(targetElement: ElementFinder, elementName: string, toWait = true) {
        StepLogger.verification(`${elementName} should be hidden`);
        await expect(await PageHelper.isElementHidden(targetElement, toWait))
            .toBe(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is hidden or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifyCheckboxIsChecked(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should be checked`);
        const checkBoxStatus = await CheckboxHelper.isCheckboxChecked(targetElement);
        await expect(checkBoxStatus).toBe(true, ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is hidden or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifyRemovedStatus(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should be removed`);
        await expect(await PageHelper.isElementHidden(targetElement))
            .toBe(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is enabled or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifyEnabledStatus(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should be enabled`);
        await expect(await PageHelper.isElementEnabled(targetElement))
            .toBe(true,
                ValidationsHelper.getEnabledValidation(elementName));
    }

    /**
     * Verify whether an element is present or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifyPresentStatus(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should present`);
        await expect(await PageHelper.isElementPresent(targetElement))
            .toBe(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    /**
     * Verify whether an element is enabled or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifySelectedStatus(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should be selected`);
        await expect(await PageHelper.isElementSelected(targetElement))
            .toBe(true,
                ValidationsHelper.getSelectedValidation(elementName));
    }

    /**
     * Verify whether an element is disabled or not
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifyDisabledStatus(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should be disabled`);
        await expect(await PageHelper.isElementEnabled(targetElement))
            .toBe(false,
                ValidationsHelper.getDisabledValidation(elementName));
    }

    /**
     * Verify that element has the exact text
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {string} expectedValue
     * @returns {Promise<void>}
     */
    static async verifyText(targetElement: ElementFinder, elementName: string, expectedValue: string) {
        StepLogger.verification(`${elementName} should have exact text as ${expectedValue} `);
        const value = (await ElementHelper.getText(targetElement)).toLowerCase().trim();
        await expect(value)
            .toBe(expectedValue.toLowerCase().trim(),
                ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue, value));
    }

    /**
     * Verify that value is grater than other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyValueGraterThan(actualValue: number, expectedValue: number, elementName: string) {
        StepLogger.verification(`${actualValue} should be grater than ${expectedValue} value`);
        await expect(actualValue).toBeGreaterThan(
            expectedValue, ValidationsHelper.getGreaterThanValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that value is less or equal than other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyValueLessOrEqualTo(actualValue: number, expectedValue: number, elementName: string) {
        StepLogger.verification(`${actualValue} should be less ot equal to ${expectedValue} value`);
        await expect(actualValue).toBeLessThanOrEqual(
            expectedValue, ValidationsHelper.getLessThanOrEqualToValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that value is less or equal than other value
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyValueGreaterOrEqualTo(actualValue: number, expectedValue: number, elementName: string) {
        StepLogger.verification(`${actualValue} should be greater or equal to ${expectedValue} value`);
        await expect(actualValue).toBeGreaterThanOrEqual(
            expectedValue, ValidationsHelper.getGreaterThanOrEqualToValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that checkbox is checked
     * @param targetElement
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyCheckBoxNotSelected(targetElement: ElementFinder, elementName: string) {
        const actualValue = await targetElement.isSelected();
        StepLogger.verification(`${elementName} should not be selected`);
        await expect(actualValue).toEqual(
            false, ValidationsHelper.getUnSelectedValidation(elementName));
    }

    /**
     * Verify that attribute values is equal to expected Value
     * @param targetElement
     * @param attribute
     * @param attribute
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyAttributeValue(targetElement: ElementFinder, attribute: string, expectedValue: string, elementName: string) {
        const actualValue = await PageHelper.getAttributeValue(targetElement, attribute);
        StepLogger.verification(`${actualValue} should be equal to  ${expectedValue} value`);
        await expect(actualValue).toEqual(
            expectedValue, ValidationsHelper.getEqualityValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that attribute values is equal to expected Value
     * @param targetElement
     * @param attribute
     * @param attribute
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyAttributeValueNotToBe(targetElement: ElementFinder,
                                             attribute: string,
                                             expectedValue: string,
                                             elementName: string
    ) {
        const actualValue = await PageHelper.getAttributeValue(targetElement, attribute);
        StepLogger.verification(`${actualValue} should not be equal to  ${expectedValue} value`);
        await !expect(actualValue).not.toBe(
            expectedValue, ValidationsHelper.getEqualityValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that value is equal to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyStringValueEqualTo(actualValue: string, expectedValue: string, elementName: string) {
        StepLogger.verification(`${actualValue} should be equal to  ${expectedValue} value`);
        await expect(actualValue).toEqual(
            expectedValue, ValidationsHelper.getEqualityValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that value contains to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyStringValueContain(actualValue: string, expectedValue: string, elementName: string) {
        StepLogger.verification(`'${actualValue}' should contains  '${expectedValue}' value`);
        await expect(actualValue).toContain(
            expectedValue, ValidationsHelper.getEqualityValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that value not contains to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyStringValueNotContain(actualValue: string, expectedValue: string, elementName: string) {
        StepLogger.verification(`'${actualValue}' should not contains '${expectedValue}' value`);
        await expect(actualValue).not.toContain(
            expectedValue, ValidationsHelper.getEqualityValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that actual value contains expected value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyActualValueContainsExpectedValue(actualValue: string, expectedValue: string, elementName: string) {
        StepLogger.verification(`${actualValue} should contain ${expectedValue} value`);
        await expect(actualValue).toContain(expectedValue.toLowerCase(),
            ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue, elementName));
    }

    /**
     * Verify that element contains text
     * @param {ElementFinder} targetElement
     * @param {string} elementName
     * @param {string} expectedValue
     * @returns {Promise<void>}
     */
    static async verifyContainsText(targetElement: ElementFinder, elementName: string, expectedValue: string) {
        StepLogger.verification(`${elementName} should have contains text as ${expectedValue} `);
        await expect((await ElementHelper.getText(targetElement)).toLowerCase())
            .toContain(expectedValue.toLowerCase(),
                ValidationsHelper.getFieldShouldHaveValueValidation(elementName, expectedValue, elementName));
    }

    /**
     * Verify that value is not equal to other value
     * @param {string} actualValue
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyStringValueNotEqualTo(actualValue: string, expectedValue: string, elementName: string) {
        StepLogger.verification(`${actualValue} should be equal to  ${expectedValue} value`);
        await expect(actualValue).not.toBe(
            expectedValue, ValidationsHelper.getInequalityValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that String is equal to other String
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyEquality(actualValue: string, expectedValue: string, elementName: string) {
        StepLogger.verification(`Field ${elementName} - ${actualValue} should be equal to  ${expectedValue} value`);
        await expect(actualValue).toEqual(
            expectedValue, ValidationsHelper.getEqualityValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that String is not equal to other String
     * @param {number} actualValue
     * @param {number} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyInequality(actualValue: string, expectedValue: string, elementName: string) {
        StepLogger.verification(`Field ${elementName} - ${actualValue} should not be equal to  ${expectedValue} value`);
        await expect(actualValue)
            .not.toBe(
                expectedValue, ValidationsHelper.getEqualityValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that CSS values is equal to expected Value
     * @param targetElement
     * @param attribute
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyCssAttributeValue(targetElement: ElementFinder, attribute: string, expectedValue: string, elementName: string) {
        const actualValue = await PageHelper.getCssValue(targetElement, attribute);
        StepLogger.verification(`Field ${elementName} - ${actualValue} should be equal to  ${expectedValue} value`);
        await expect(actualValue).toEqual(
            expectedValue, ValidationsHelper.getEqualityValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that attribute values contains expected Value
     * @param targetElement
     * @param attribute
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyAttributeContains(targetElement: ElementFinder, attribute: string, expectedValue: string, elementName: string) {
        const actualValue = await PageHelper.getAttributeValue(targetElement, attribute);
        StepLogger.verification(`Field ${elementName} - ${actualValue} should contain  ${expectedValue} value`);
        await expect(actualValue)
            .toContain(expectedValue,
                ValidationsHelper.getNotContainsValidation(actualValue, expectedValue, elementName));
    }

    /**
     * Verify that attribute values does not contain Value
     * @param targetElement
     * @param attribute
     * @param {string} expectedValue
     * @param elementName
     * @returns {Promise<void>}
     */
    static async verifyAttributeNotContains(targetElement: ElementFinder, attribute: string, expectedValue: string, elementName: string
    ) {
        const actualValue = await PageHelper.getAttributeValue(targetElement, attribute);
        StepLogger.verification(`Field ${elementName} - ${actualValue} should be equal to  ${expectedValue} value`);
        await expect(actualValue)
            .not.toContain(
                expectedValue, ValidationsHelper.getContainsValidation(actualValue, expectedValue, elementName));
    }

    static async isListSortedAscending(sourceList: any[], elementName: string) {
        await expect(await PageHelper.isListSorted(sourceList, true))
            .toBe(true,
                ValidationsHelper.getAscendingSortedValidation(elementName));
    }

    static async isListSortedDescending(sourceList: any[], elementName: string) {
        await expect(await PageHelper.isListSorted(sourceList, false))
            .toBe(true,
                ValidationsHelper.getDescendingSortedValidation(elementName));
    }
}
