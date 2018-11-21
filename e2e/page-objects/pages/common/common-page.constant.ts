import { browser } from 'protractor';

export class CommonPageConstant {
    static readonly overlayClass = 'cdk-overlay-backdrop';

    static readonly admin = browser.params.users.administrator;
    static credentials = {
        administrator: {
            username: CommonPageConstant.admin.username.toString(),
            password: CommonPageConstant.admin.password.toString(),
            displayName: CommonPageConstant.admin.displayName.toString()
        }
    };

    static get profileOptions() {
        return {
            logOut: 'Logout',
            profile: 'Profile'
        };
    }

    static get sidebarNavigationMenus() {
        return {
            dashboard: 'Dashboard',
            dataDesign: {
                root: 'Data Design',
                child: {
                    reports: 'Reports',
                    reportQueue: 'Report Queue',
                    analyticsWorkbench: 'Analytics Workbench',
                    sqlWorkbench: 'SQL Workbench'
                }
            },
            scheduler: {
                root: 'Scheduler',
                child: {
                    schedules: 'Schedules',
                    results: 'Results'
                }
            },
            administration: {
                root: 'Administration',
                child: {
                    users: 'Users',
                    groups: 'Groups',
                    roles: 'Roles',
                    distributionFilters: 'Distribution Filters',
                    i18n: 'i18n',
                    analytics: 'Analytics',
                    importExport: 'Import / Export'
                }
            }
        };
    }

    static get commonButtonLabels() {
        return {
            save: 'Save',
            yes: 'Yes',
            no: 'No',
            cancel: 'Cancel'
        };
    }
}
