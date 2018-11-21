import { PageHelper } from '../../components/html/page-helper';

import { DemoConstantContract } from './demo.constant.contract';
import { DemoEnglishConstant } from './demo.english.constant';

export class DemoGermanConstant extends DemoEnglishConstant implements DemoConstantContract {
    specificField = 'German';

    get randomLanguageName() {
        return `${this.specificField} ${PageHelper.getUniqueId()}`;
    }
}
