export default class HomePage{
    constructor(page) {
        this.page = page;
        this.searchInput = this.page.locator("//input[@id='search']");
    };

    async searchByItems(item) {
        await this.searchInput.fill(item);
    };
};