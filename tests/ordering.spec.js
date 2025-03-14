import { expect } from '@playwright/test';
import { test } from '../fixtures';

const email = 'mytest.111888@gmail.com';
const password = 'TestPass123';

// test('Login', async ({ page, signinPage}) => {
//     await page.goto(
//       // "https://magento.softwaretestingboard.com/"
//       "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
//     );
//     await signinPage.login(email, password);
// });

test.beforeEach(async ({ page, signinPage }) => {
    await page.goto(
        'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'
    );
    await signinPage.login(email, password);
});

test('Searching an item', async ({ page, signinPage, homePage, browser, request }) => {
    // await userSignin(page, signinPage);
    await homePage.searchByItems('hoodie');
    await homePage.searchInput.press('Enter');
    await homePage.openItem();
});

test('Check that Size and Color are required fields', async ({ page, goodPage, browser, request }) => {
    await goodPage.addItemToCart();
    assertThat(page.locator("//div[@for='super_attribute[143]']")).containsText('This is a required field.');
    assertThat(page.locator("//div[@for='super_attribute[93]']")).containsText('This is a required field.');
});
