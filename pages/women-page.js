export default class WomenPage {
    constructor(page) {
        this.page = page;
        this.womenDropdown = this.page.locator("//span[text()='Women']");
    }

    async goToWomenPage() {
        await this.womenDropdown.click();
    }
}
