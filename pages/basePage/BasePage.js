
export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async gotoUrl(path = "/") {
        await this.page.goto(path);
    }
    async enterText(locator, text) {
        await locator.fill(text);//fill is playwright method to enter text in input field
    }
    async clickElement(locator) {
        await locator.click();

    }
    async getText(locator) {
        return await locator.textContent();
    }

}