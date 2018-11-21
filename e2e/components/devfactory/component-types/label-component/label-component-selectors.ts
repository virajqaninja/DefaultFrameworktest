// tslint:disable-next-line:max-line-length
import { LabelComponentSelectorsFactory } from '@aurea/protractor-automation-helper';

export class LabelComponentSelectors extends LabelComponentSelectorsFactory {
    public static readonly selector = 'label';

    public static getInfoIconXPath(labelName: string) {
        return `//${this.selector}[normalize-space(.)="${labelName}"]/following-sibling::i`;
    }
}
