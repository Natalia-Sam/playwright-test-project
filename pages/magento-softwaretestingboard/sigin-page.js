export const userSignin = async function loginUser(
    page,
    signInPage,
    email = process.env.EMAIL,
    password = process.env.PASSWORD
) {
    await page.goto('https://magento.softwaretestingboard.com/');
    await signInPage.login(email, password);
};

export default class SigninPage {
    constructor(page) {
        this.page = page;
        this.emailInput = this.page.locator("//input[@id='email']");
        this.passwordInput = this.page.locator("//input[@name='login[password]']");
        this.submitBtn = this.page.locator("//button[@class='action login primary']");
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitBtn.click();
    }
}
