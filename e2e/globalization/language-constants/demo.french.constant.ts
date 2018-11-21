import { PageHelper } from '../../components/html/page-helper';

import { DemoConstantContract } from './demo.constant.contract';
import { DemoEnglishConstant } from './demo.english.constant';

export class DemoFrenchConstant extends DemoEnglishConstant implements DemoConstantContract {
    specificField = 'French';

    get randomLanguageName() {
        return `${this.specificField} ${PageHelper.getUniqueId()}`;
    }
}
