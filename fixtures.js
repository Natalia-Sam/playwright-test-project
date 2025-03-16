import { test as base } from '@playwright/test';
import HomePage from './pages/magento-softwaretestingboard/home-page';
import SalePage from './pages/magento-softwaretestingboard/sale-page';
import SignInPage from './pages/magento-softwaretestingboard/sigin-page';
import GoodPage from './pages/magento-softwaretestingboard/good-page';

export const test = base.extend({
    /** @type { HomePage } */
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    /** @type { SignInPage } */
    signinPage: async ({ page }, use) => {
        await use(new SignInPage(page));
    },

    /** @type { GoodPage } */
    goodPage: async ({ page }, use) => {
        await use(new GoodPage(page));
    },

    /** @type { SalePage } */
    salePage: async ({ page }, use) => {
        await use(new SalePage(page));
    },
});
