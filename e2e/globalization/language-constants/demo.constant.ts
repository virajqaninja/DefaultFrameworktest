import { GenericDemo } from '../generic-demo';

import { DemoConstantContract } from './demo.constant.contract';
import { DemoDutchConstant } from './demo.dutch.constant';
import { DemoEnglishConstant } from './demo.english.constant';
import { DemoFrenchConstant } from './demo.french.constant';
import { DemoGermanConstant } from './demo.german.constant';

export class DemoConstant {
    static get Instance(): DemoConstantContract {
        return GenericDemo.Instance<DemoConstantContract>(DemoEnglishConstant,
            DemoFrenchConstant,
            DemoDutchConstant,
            DemoGermanConstant);
    }
}
