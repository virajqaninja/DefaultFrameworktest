import { element, By } from 'protractor';

import { ButtonComponentSelectors } from '../../../components/devfactory/component-types/button-component/button-component-selectors';

import { CommonPageConstant } from './common-page.constant';

export class CommonPage {

    static get loadingContainer() {
        return element(By.css('.df-loader__container'));
    }

    static get sidebarNavigationMenus() {
        const labels = CommonPageConstant.sidebarNavigationMenus;
        return {
            dashboard: this.getSidebarMenu(labels.dashboard),
            dataDesign: {
                root: this.getSidebarMenu(labels.dataDesign.root),
                child: {
                    reports: this.getSidebarMenu(labels.dataDesign.child.reports),
                    reportQueue: this.getSidebarMenu(labels.dataDesign.child.reportQueue),
                    analyticsWorkbench: this.getSidebarMenu(labels.dataDesign.child.analyticsWorkbench),
                    sqlWorkbench: this.getSidebarMenu(labels.dataDesign.child.sqlWorkbench)
                }
            },
            scheduler: {
                root: this.getSidebarMenu(labels.scheduler.root),
                child: {
                    schedules: this.getSidebarMenu(labels.scheduler.child.schedules),
                    results: this.getSidebarMenu(labels.scheduler.child.results)
                }
            },
            administration: {
                root: this.getSidebarMenu(labels.administration.root),
                child: {
                    users: this.getSidebarMenu(labels.administration.child.users),
                    groups: this.getSidebarMenu(labels.administration.child.groups),
                    roles: this.getSidebarMenu(labels.administration.child.roles),
                    distributionFilters: this.getSidebarMenu(labels.administration.child.distributionFilters),
                    i18n: this.getSidebarMenu(labels.administration.child.i18n),
                    analytics: this.getSidebarMenu(labels.administration.child.analytics),
                    importExport: this.getSidebarMenu(labels.administration.child.importExport)
                }
            }
        };
    }

    static get profileOptions() {
        const labels = CommonPageConstant.profileOptions;
        return {
            logOut: ButtonComponentSelectors.getItem(labels.logOut),
            profile: ButtonComponentSelectors.getItem(labels.profile)
        };
    }

    static get userProfile() {
        return element(By.css('df-user-profile'));
    }

    static get overlayBackDrop() {
        return element(By.className(CommonPageConstant.overlayClass));
    }

    static get hamburgerIcon() {
        return element(By.css('app-hamburger'));
    }

    static getActiveMenuItem(text: string) {
        return element(By.xpath(`//div[contains(@class,"df-sidebar__item--active")]//a[normalize-space(.)="${text}"]`));
    }

    static getSidebarMenu(menuText: string) {
        return element(By.xpath(`//a[normalize-space(.)='${menuText}']`));
    }
}
