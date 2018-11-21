import { GlobalizationHelper } from './globalization.helper';
import { SelectedLanguage } from './languages.enum';

export class GenericDemo {
    static Instance<T>(english: { new(): T }, french: { new(): T }, dutch: { new(): T }, german: { new(): T }): T {
        switch (GlobalizationHelper.language) {
            case SelectedLanguage.English:
                return new english();
            case SelectedLanguage.French:
                return new french();
            case SelectedLanguage.Dutch:
                return new dutch();
            case SelectedLanguage.German:
                return new german();
            default:
                throw new Error(`${GlobalizationHelper.language} support doesn't exists for this language`);
        }
    }
}
