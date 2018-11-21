import { DemoConstant } from '../../../globalization/language-constants/demo.constant';
import { SuiteNames } from '../../helpers/suite-names';

xdescribe(SuiteNames.e2eTestSuite,
    () => {
        it('Globalization test - [18176328][BUG:SNSGCID-19909]', () => {
            console.log(DemoConstant.Instance.specificField);
            console.log(DemoConstant.Instance.commonField);
            console.log(DemoConstant.Instance.randomLanguageName);
            DemoConstant.Instance.printLanguageName();
            expect(true).toBe(false);
        });
    }
);
