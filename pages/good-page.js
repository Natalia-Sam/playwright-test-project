export default class GoodPage {
    constructor(page) {
        this.page = page;
        this.sizeOption = this.page.locator("//div[@aria-labelledby='option-label-size-143']");
        this.colorOption = this.page.locator("//div[@aria-labelledby='option-label-color-93']");
        this.addToCartBtn = this.page.locator("//button[@title='Add to Cart']");
        this.addToCartBtn = this.page.locator("//button[@title='Add to Cart']");
    }

    async addItemToCart() {
        await this.addToCartBtn.click();
    }
}
