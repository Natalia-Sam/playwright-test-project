import { type Page, type Locator } from '@playwright/test';

export default class GoodPage {
    readonly page: Page;
    readonly sizeOption: Locator;
    readonly colorOption: Locator;
    readonly addToCartBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sizeOption = this.page.locator("//div[@aria-labelledby='option-label-size-143']");
        this.colorOption = this.page.locator("//div[@aria-labelledby='option-label-color-93']");
        this.addToCartBtn = this.page.locator("//button[@title='Add to Cart']");
    }

    public async addItemToCart() {
        await this.addToCartBtn.click();
    }
}

/**
 * Move to Typescript
 * Start to use locators defined by playwright
 * Start to use css
 *  .class #id     [type='text'] - attribute
 */
