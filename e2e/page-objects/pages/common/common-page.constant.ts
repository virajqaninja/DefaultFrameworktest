import { browser } from 'protractor';

export class CommonPageConstant {
    public static readonly closeIcon = 'Close Icon';
    public static readonly searchGreeButton = 'Search Green Button';
    public static readonly breadcumbText = 'Breadcrumb';
    static get buttonLabels() {
        return {
            close: 'Close',
            next: 'Next',
            done: 'Done',
            send: 'Send',
            save: 'Save',
            cancel: 'Cancel',
            ok: 'Ok',
        };
    }

    static get loadingContainer() {
        return {
            loadingSpinner: 'Loading Container'
        };
    }

    static get credentials() {
        // Not a typed object
        // noinspection Annotator
        const admin = browser.params.users.adminUser;
        const user = browser.params.users.user;
        const leader = browser.params.users.leader;
        const cmRoot = browser.params.users.cmroot;
        const epaAdmin = browser.params.users.epaAdmin;
        const epaUser = browser.params.users.epaUser;
        const epaManager = browser.params.users.epaManager;
        return {
            administrator: {
                username: admin.username.toString(),
                password: admin.password.toString()
            },
            cmRootCredentials: {
                username: cmRoot.username.toString(),
                password: cmRoot.password.toString()
            },
            user: {
                username: user.username.toString(),
                password: user.password.toString()
            },
            leader: {
                username: leader.username.toString(),
                password: leader.password.toString()
            },
            epaAdmin: {
                username: epaAdmin.username.toString(),
                password: epaAdmin.password.toString()
            },
            epaUser: {
                username: epaUser.username.toString(),
                password: epaUser.password.toString()
            },
            epaManager: {
                username: epaManager.username.toString(),
                password: epaManager.password.toString()
            },
        };
    }

    static get navigationMenuLabels() {
        return {
            support: 'Support',
            supportSubMenu:
                {
                    customers: 'Customers',
                    supportUsers: 'Support Users',
                    hotlinePhoneNumbers: 'Hotline Phone Numbers',
                    pageCarriers: 'Pager Carriers',
                    alertFindStatus: 'AlertFind Status'
                },
            administration: 'Administration',
            administrationSubMenu:
                {
                    myAccount: 'My Account',
                    team: 'Team',
                    applicationSettings: 'Application Settings'
                },
            hotlines: 'Hotlines',
            hotlinesSubMenu:
                {
                    hotlines: 'Hotlines',
                }
        };
    }

    static get navigationMenuLabelsImpersonate() {
        return {
            administration: 'Administration',
            administrationSubMenu:
                {
                    teams: 'Teams',
                    users: 'Users'
                },
            groups: 'Groups',
            groupsSubMenu:
                {
                    broadcastGroups: 'Broadcast Groups',
                    escalationGroups: 'Escalation Groups',
                    smartGroups: 'Smart Groups'
                },
            reporting: 'Reporting',
            reportingSubMenu:
                {
                    reportLists: 'Report Lists',
                    devicesReport: 'Devices Report'
                },
            notificationTemplate: 'Notification Templates',
            notificationTemplateSubMenu:
                {
                    manageLibrary : 'Manage Library',
                },
            incidents: 'Incidents',
            incidentsSubMenu:
                {
                    incidents : 'Incidents',
                },
            launchCenter: 'Launch Center',
            launchCenterSubMenu:
                {
                    alertConsole: 'Alert Console',
                    composeAdvanced: 'Compose (Advanced)'
                },
            hotlines: 'Hotlines',
            hotlinesSubMenu:
                {
                    hotlines: 'Hotlines'
                },
            assets: 'Assets',
            assetsSubMenu:
                {
                    sites: 'Sites',
                }
        };
    }

    static get profileOptions() {
        return {
            configuration: 'Configuration',
            logOut: 'Log Out'
        };
    }

    static get commonButtonLabels() {
        return {
            save: 'Save',
            yes: 'Yes',
            cancel: 'Cancel',
        };
    }

    static get buttonsOnPopUp() {
        return {
            new: 'New',
            edit: 'Edit',
            delete: 'Delete',
            help: 'Help',
            save: 'Save',
            cancel: 'Cancel',
            ok: 'Ok',
            saveDraft: 'Save as draft'
        };
    }

    static get messagesText() {
        return {
            successHeader: 'Success!',
            successParagraph: 'Display name updated successfully.',
            successPassword: 'Password updated successfully.'
        };
    }

    static get classSelectors() {
        return {
            modalDialog: 'modal-dialog modal-lg',
            pagination: 'df-table-paginator__options__row ng-star-inserted',
            pages: 'df-table-paginator__options__pages df-table-paginator__options__group',
            total: 'df-table-paginator__options__total df-table-paginator__options__group',
            modalDialogFooter: 'modal-footer action-bar',
            searchIcon: 'search-btn btn btn-green',
            sorAscending: 'df-sort-icon df-sort-icon--asc',
            sorDescending: 'df-sort-icon df-sort-icon--desc',
            paginationBackward: 'fa fa-step-backward',
            paginationLeft: 'fa fa-caret-left',
            paginationForward: 'fa fa-step-forward',
            paginationRight: 'fa fa-caret-right',
            pagesInput: 'df-table-paginator__options__pages__input df-input',
            emailMessageBody: 'fr-element fr-view',
            footerSection: 'section__footer',
            mainTableOne: 'mt-1 df-table',
            removeMinusIcon: 'px-',
            navigateItem: 'nav-link'
        };
    }

    static get nameSelectors() {
        return {
            subject: 'subject',
            divDropDown: 'df-select__input-text'
        };
    }

    static get idSelectors() {
        return {
            search: 'search'
        };
    }

    static get teamsPopUpTableHeader() {
        return {
            teamName: 'Team Name',
            description: 'Description'
        };
    }

    static get pagination() {
        return {
            right: 'Right Pagination',
            left: 'Left Pagination',
            forward: 'Forward Pagination',
            backward: 'Backward Pagination',
            pages: 'Pages Page Options Input'
        };
    }

    static get numbers() {
        return {
            zero: 0,
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10
        };
    }

    static get errorMessages() {
        return {
            messageRequired: 'Message is required',
            subjectRequired: 'Subject is required'
        };
    }

    public static get footerElements() {
        return {
            backward: 'backward',
            left: 'left',
            right: 'right',
            forward: 'forward',
            refresh: 'refresh',
            numberOfPages: 'number of pages',
            pageSearch: 'page search',
            total: 'Total'
        };
    }

    public static get AlertBox() {
        return {
            alert: 'Alert',
            alertBoxHeader: 'alert__box__header',
        };
    }
}
