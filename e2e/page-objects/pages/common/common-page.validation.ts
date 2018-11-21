import { browser } from 'protractor';

export class CommonPageValidation {

    static async mainContainerWidthShouldBeIncreased() {
        return `Main container width should be increased at ${await browser.getCurrentUrl()}`;
    }
}
