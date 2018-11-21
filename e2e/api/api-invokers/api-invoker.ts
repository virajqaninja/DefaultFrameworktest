import { CommonPageConstant } from '../../page-objects/pages/common/common-page.constant';
import { CommonApiConstant } from '../api-helpers/common/common-api.constant';
import { ContentType } from '../api-helpers/common/content-type-helper';
import { LogonEndpoint } from '../api-objects/logon/logon.endpoint';

import { AureaRestWrapper } from './aurea-rest-wrapper';

export class ApiInvoker {
    aureaRestWrapper: AureaRestWrapper;
    jsonTypeRequest = false;
    processedBody: any;
    cookie: any;

    constructor(public withToken = true,
                public logonUrl = LogonEndpoint.root,
                public userName = CommonPageConstant.credentials.administrator.username,
                public password = CommonPageConstant.credentials.administrator.password) {
        this.aureaRestWrapper = new AureaRestWrapper();
    }

    /**
     * To hook authentication cookies
     */
    async hookToken() {
        const result: any = await this.aureaRestWrapper
            .post(this.logonUrl)
            .type(ContentType.JSON)
            .send({
                username: this.userName,
                password: this.password
            }, true)
            .end();
        if (result.headers) {
            const headers = result.headers['set-cookie'];
            if (headers && headers.length > 0) {
                this.cookie = headers[0];
            }
        }
    }

    /**
     * Post call to API
     * @param {string} uri application uri
     * @param {any} body content to be sent in body
     * @param resultField
     * @param {any} type optional parameter, default value: {'Content-Type': 'application/json'}
     * @returns {Promise<Response>}
     */
    async post<T>(uri: string, body: any, resultField = CommonApiConstant.responseFields.body, type = ContentType.JSON): Promise<T> {
        await this.createRequest(body, type);
        const result: any = await this.aureaRestWrapper
            .type(type)
            .post(uri)
            .send(this.processedBody, this.jsonTypeRequest)
            .end();
        if (result[resultField] && !(result[resultField].constructor === Array || result[resultField].constructor === Object)) {
            result[resultField] = JSON.parse(result[resultField]);
        }
        this.logging(body, result);
        return this.transformResult<T>(result, resultField);
    }

    async postWithFile<T>(uri: string, body: any, resultField = CommonApiConstant.responseFields.body): Promise<any> {
        await this.createRequest(body, null);
        const result: any = await new AureaRestWrapper()
            .post(uri)
            .headers({'cookie': this.cookie})
            .attach(this.processedBody)
            .end();
        this.logging(body, result);
        return {data: result[resultField] as T, headers: result.headers} as any;
    }

    /**
     * Delete call to API
     * @param {string} uri application uri
     * @param body
     * @param resultField
     * @param {any} type optional parameter, default value: {'Content-Type': 'application/json'}
     * @returns {Promise<Response>}
     */
    async delete<T>(uri: string, body?: any, resultField = CommonApiConstant.responseFields.body, type = ContentType.JSON): Promise<T> {
        await this.createRequest(body, type);
        const result: any = await this.aureaRestWrapper
            .type(type)
            .delete(uri)
            .send(this.processedBody, this.jsonTypeRequest)
            .end();
        this.logging(body, result);
        return this.transformResult<T>(result, resultField);
    }

    private transformResult<T>(result: any, resultField: string): T {
        if (result[resultField] && !(result[resultField].constructor === Array || result[resultField].constructor === Object)) {
            result[resultField] = JSON.parse(result[resultField]);
        }
        return result[resultField] as T;
    }

    /**
     * Put call to API
     * @param {string} uri application uri
     * @param {any} body content to be sent in body
     * @param resultField
     * @param {any} type optional parameter, default value: {'Content-Type': 'application/json'}
     * @returns {Promise<Response>}
     */
    async put<T>(uri: string, body: any, resultField = CommonApiConstant.responseFields.body, type = ContentType.JSON): Promise<T> {
        await this.createRequest(body, type);
        const result: any = await this.aureaRestWrapper
            .type(type)
            .put(uri)
            .send(this.processedBody, this.jsonTypeRequest)
            .end();
        this.logging(body, result);
        return this.transformResult<T>(result, resultField);
    }

    private logging(request: any, result: any) {
        this.logger(request, 'Request Body:');
        this.logger(result.body, 'Result Body:');
        this.logger(result.error, 'Result Error:');
    }

    private logger(obj: any, type: string) {
        /*let log: string;
        if (obj && obj.constructor === Array || obj.constructor === Object) {
            log = JSON.stringify(obj);
        } else {
            log = obj;
        }*/
        if (obj) {
            console.log(`\r\n${type} ${JSON.stringify(obj)}`);
        }
    }

    /**
     * Get call to API
     * @param {string} uri application uri
     * @param resultField
     * @param {any} header optional parameter, default value: {'Content-Type': 'application/json'}
     * @returns {Promise<Response>}
     */
    async get<T>(uri: string, resultField = CommonApiConstant.responseFields.body, header = ContentType.JSON): Promise<T> {
        await this.createRequest();
        const result: any = await this.aureaRestWrapper
            .get(uri)
            .type(header)
            .end();
        this.logging({}, result);
        return this.transformResult<T>(result, resultField);
    }

    private async createRequest(body?: any, header = ContentType.JSON) {
        if (this.withToken) {
            await this.hookToken();
        }
        if (body) {
            this.jsonTypeRequest = header === ContentType.JSON;
            if (!(body.constructor === Array || body.constructor === Object) && header === ContentType.JSON) {
                this.processedBody = JSON.parse(body);
            } else {
                this.processedBody = body;
            }
        }
    }
}
