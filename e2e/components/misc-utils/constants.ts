import { ConstantsFactory } from '@aurea/protractor-automation-helper';

export class Constants extends ConstantsFactory {
    static readonly MAX_RETRY_ATTEMPTS = 3;
    static readonly EMPTY_STRING = '';
    static readonly none = 'None';
    static readonly MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    static get separators() {
        return {
            comma: ',',
            semiColon: ';',
            apostrophe: '\'',
            pipe: '|',
        };
    }

    static get httpStatusCodes() {
        return {
            success: 200,
            badRequest: 400,
            unauthorized: 401,
            forbidden: 403,
            notFound: 404,
            internalServerError: 500,
            serviceUnavailable: 503,
            gatewayTimeout: 504,
        };
    }
}
