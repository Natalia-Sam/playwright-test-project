import { test as base } from '@playwright/test';
import HomePage from './pages/home-page';
import SalePage from './pages/sale-page';
import SignInPage from './pages/sigin-page';
import GoodPage from './pages/good-page';

export const test = base.extend({
    /** @type { HomePage } */
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    /** @type { SigninPage } */
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
