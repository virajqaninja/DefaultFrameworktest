const browserList = require('./browser-list.js');
const setupUtilities = require('./setup-utilities');
const browserStackBrowser = browserList[setupUtilities.getParam('chrome', '--params.browserstack.browser', false)];
const maxBrowserInstances = process.env.MAX_INSTANCES || setupUtilities.getParam(5, '--params.maxInstances', false);
const useHeadlessBrowser = process.env.HEADLESS_BROWSER || setupUtilities.toBoolean(setupUtilities.getParam(false, '--params.headlessBrowser', false));
const chromeHeadlessArgs =
    ['--headless',
        '--disable-gpu',
        '--window-size=1280x800',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--acceptInsecureCerts',
        '--ignore-certificate-errors',
        '--remote-debugging-port=9222',
        '--disable-blink-features=BlockCredentialedSubresources',
        '--disable-web-security'];

/*  ABOUT --disable-dev-shm-usage:
    By default, Docker runs a container with a /dev/shm shared memory space 64MB.
    This is typically too small for Chrome and will cause Chrome to crash when rendering large pages.
    To fix, run the container with docker run --shm-size=1gb to increase the size of /dev/shm.
    Since Chrome 65, this is no longer necessary. Instead, launch the browser with the --disable-dev-shm-usage flag
    sources:
        - https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#tips
        - https://developers.google.com/web/tools/puppeteer/troubleshooting
*/
const chromeOptions = {
    args: useHeadlessBrowser ? chromeHeadlessArgs : [],
    // Set download path and avoid prompting for download even though
    // this is already the default on Chrome but for completeness
    prefs: {
        'download': {
            'prompt_for_download': false,
            'directory_upgrade': true,
            'default_directory': 'Downloads',
        },
    },
};
const configSetup = {
    restartBrowserBetweenTests: false,
    SELENIUM_PROMISE_MANAGER: false,
    multiCapabilities: [{
        browserName: 'chrome',
        'chromeOptions': chromeOptions,
        shardTestFiles: 'true',
        maxInstances: maxBrowserInstances,
        acceptInsecureCerts: true,
    }],
    allScriptsTimeout: 300000,
    suites: {
        health_tests: './e2e/test-suites/health-check/**/*.e2e-spec.ts',
        e2e_tests: './e2e/test-suites/e2e/**/*.e2e-spec.ts',
        api_tests: './e2e/test-suites/api/**/*.e2e-spec.ts'
    },
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': chromeOptions,
        acceptInsecureCerts: true,
    },
    bsMultiCapabilities: [{
        name: `${browserStackBrowser.os} ${browserStackBrowser.os_version}-${browserStackBrowser.browserName} v ${browserStackBrowser.browser_version || 'Latest'}`,
        'browserName': browserStackBrowser.browserName,
        'browser_version': browserStackBrowser.browser_version,
        'os': browserStackBrowser.os,
        'os_version': browserStackBrowser.os_version,
        'resolution': browserStackBrowser.resolution,
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || setupUtilities.getParam('', '--params.browserstack.user', false),
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || setupUtilities.getParam('', '--params.browserstack.key', false),
        'browserstack.local': process.env.BROWSERSTACK_LOCAL || setupUtilities.getParam(false, '--params.browserstack.local', false),
        'build': process.env.BROWSERSTACK_BUILD || setupUtilities.getParam('Local Build - ' + new Date().toISOString(), '--params.browserstack.build', false),
        'browserstack.debug': 'true',
        'acceptSslCerts': 'true',
        'trustAllSSLCertificates': 'true',
        'browserstack.timezone': 'UTC',
        'browserstack.safari.allowAllCookies': 'true',
        shardTestFiles: true,
        maxInstances: maxBrowserInstances,
    }],
    params: {
        verboseLogging: process.env.ENABLE_VERBOSE_LOGGING || setupUtilities.getParam(false, '--params.enableVerboseLogging', false),
        maxInstances: 5,
        maxSessions: 5,
        users: {
            administrator: {
                username: "ebms",
                password: "ebms",
                displayName: "ebms"
            }
        },
        apiUrls: {
            leadOemPrograms: '/debugInfo/lps/leadOemPrograms/{programId}',
            dealerMaster: '/debugInfo/lps/dealerMaster?dealerCode={DealerCode}&oemCode={OEMCode}',
        },
        testrail: {
            projectId: process.env.TESTRAIL_PROJECT_ID || setupUtilities.getParam(33285, '--params.testrail.projectId', false),
            milestoneName: process.env.TESTRAIL_MILESTONE_NAME || setupUtilities.getParam('Automation milestone week', '--params.testrail.milestoneName', false),
            versionName: process.env.VERSION || setupUtilities.getParam('Default version name', '--params.testrail.versionName', false),
            host: process.env.TESTRAIL_HOST || setupUtilities.getParam('https://testrail.devfactory.com/', '--params.testrail.host', false),
            user: process.env.TESTRAIL_USER || setupUtilities.getParam('testrail.automation@aurea.com', '--params.testrail.user', false),
            password: process.env.TESTRAIL_PASSWORD || setupUtilities.getParam('Ra1MxzvkpwYyd7rwzAMG-QfKX0hg9EqO/TFm81UG7', '--params.testrail.password', false),
        },
        version: process.env.VERSION || setupUtilities.getParam('7.5.0', '--params.testrail.versionName', false),
        selenium: {
            hub: process.env.SELENIUM_URL || setupUtilities.getParam('http://10.69.8.112:4444/wd/hub', '--params.selenium.hub', false),
        },
        language: process.env.LANGUAGE || setupUtilities.getParam('French', '--params.language', false),
        browserstack: {
            user: '', //Don't specify anything here it's just for a reference purpose that it can be a param
            key: '',//Don't specify anything here it's just for a reference purpose that it can be a param
            local: '',//Don't specify anything here it's just for a reference purpose that it can be a param
            localIdentifier: '',//Don't specify anything here it's just for a reference purpose that it can be a param
            build: '',//Don't specify anything here it's just for a reference purpose that it can be a param
        },

    },
    baseUrl: "http://vm-000166ae.vdi-vm.devfactory.com:18793/sbm/bpmportal/",
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
        print: function () {
        },
    },
};
module.exports = configSetup;
