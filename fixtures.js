import { test as base } from '@playwright/test';
import HomePage from './pages/home-page';
import SalePage from './pages/sale-page';

export const test = base.extend({
    /** @type { HomePage } */
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    /** @type { SalePage } */
    salePage: async ({ page }, use) => {
        await use(new SalePage(page));
    },
});