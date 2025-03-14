export default class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = this.page.locator("//input[@id='search']");
        this.listOfItems = this.page.locator("//li[@class='item product product-item']"); //img[@class='product-image-photo']
        // this.signinBtns = this.page.locator("//li[@class='authorization-link']");
        // this.emailInput = this.page.locator("//input[@id='email']");
        // this.passwordInput = this.page.locator("//input[@id='pass']");
        // this.submitBtn = this.page.locator("//button[@class='action login primary']");
    }

    // async login(email, password) {
    //     const signinBtn = await this.signinBtns.all();
    //     signinBtn[0].click();
    //     await this.emailInput.fill(email);
    //     await this.passwordInput.fill(password);
    //     await this.submitBtn.click();
    // };

    async searchByItems(item) {
        console.log(this.searchInput);
        await this.searchInput.fill(item);
    }

    async openItem() {
        const allItemsInSearchResult = await this.listOfItems.all();
        allItemsInSearchResult[0].click();
    }
}
