import { PageHelper } from '../../components/html/page-helper';

import { DemoConstantContract } from './demo.constant.contract';
import { DemoEnglishConstant } from './demo.english.constant';

export class DemoDutchConstant extends DemoEnglishConstant implements DemoConstantContract {
    specificField = 'Dutch';

    get randomLanguageName() {
        return `${this.specificField} ${PageHelper.getUniqueId()}`;
    }
}
