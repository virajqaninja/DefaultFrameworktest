import { element, By } from 'protractor';

import { CommonPageConstant } from '../../common/common-page.constant';
import { CommonPageHelper } from '../../common/common-page.helper';

import { I18nPageConstant } from './i18n-page.constant';

export class I18nPage {
    static readonly followingDivText = '//following-sibling::div[normalize-space(text())';

    static get mainContainer() {
        return element(By.css(CommonPageHelper.getPageTag(I18nPageConstant.pageName)));
    }

    static get moduleContent() {
        const localeTableGrid = '//tr[@dfgridreorderablerow]';
        return {
            fileModuleContent: element.all(By.xpath(`${localeTableGrid}`)).first(),
            getAllLocaleTableValue: (value: string) => element(By.xpath(`${localeTableGrid}//*[text()='${value}']`))
        };
    }

    static get editTransactionPopup() {
        const labelText = '//label[normalize-space(text())';
        const spanText = '//span[normalize-space(text())';
        const headerText = '//h1[normalize-space(text())';
        const inputSibling = 'following-sibling::div//input';
        return {
            title: element(By.xpath(`${headerText} = '${I18nPageConstant.editTranslationPopup.title}']`)),
            hiddenKey: element(By.xpath(`${labelText}='${I18nPageConstant.editTranslationPopup.key}']/${inputSibling}[@disabled]`)),
            hiddenEnglishTransaction: element(By.xpath(`${labelText}='${I18nPageConstant
                .editTranslationPopup.englishTranslation}']/${inputSibling}[@disabled]`)),
            newTranslation: element(By.xpath(`${labelText}='${I18nPageConstant.editTranslationPopup.newTranslation}']/${inputSibling}`)),
            cancelButton: element(By.xpath(`${spanText} = '${CommonPageConstant.commonButtonLabels.cancel}']/ancestor::button`))
        };
    }

    static getFolderByName(folderName: string) {
        return element(By.xpath(`//i[contains(@class,'fa-folder')]${this.followingDivText}='${folderName}']`));
    }

    static getFileByName(fileName: string) {
        return element(By.xpath(`//i[contains(@class,'fa-file-o')]${this.followingDivText}='${fileName}']`));
    }
}
