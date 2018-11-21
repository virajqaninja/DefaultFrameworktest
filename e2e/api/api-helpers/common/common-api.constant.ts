import { browser } from 'protractor';

export class CommonApiConstant {
    static readonly endpointPrefix = `${browser.baseUrl}analyzer/api/v1`;
    static readonly index = 'Index:';

    static readonly responseFields = {
        error: 'error',
        body: 'body'
    };

    static httpStatusCodes = {
        success: 200,
        created: 201,
        badRequest: 400,
        unauthorized: 401,
        forbidden: 403,
        notFound: 404,
        internalServerError: 500,
        serviceUnavailable: 503,
        gatewayTimeout: 504
    };

    static apiLabels = {
        error: 'ERROR',
        done: 'DONE',
        daily: 'DAILY',
        reportPrefix: 'report_',
        report: 'REPORT',
    };
}
