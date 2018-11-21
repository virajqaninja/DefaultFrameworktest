import { PageHelper } from '../../components/html/page-helper';

import { DemoConstantContract, ShippingInfo } from './demo.constant.contract';

export class DemoEnglishConstant implements DemoConstantContract {
    specificField = 'English';
    commonField = 'Common Field';
    nestedField: ShippingInfo = {
        address: 'The landmark Example city Park London, 40089',
        name: 'John Doe',
    };

    get randomLanguageName() {
        return `${this.specificField} ${PageHelper.getUniqueId()}`;
    }

    /**
     * Method implementation
     */
    printLanguageName(): void {
        console.log(this.specificField);
    }
}
