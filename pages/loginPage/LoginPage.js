import { BasePage } from '../../pages/basePage/BasePage.js';
import {ROUTES} from '../../utils/constants.js';
export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.userName = page.locator('[data-test="username"]');
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.clkBtn = page.locator('[data-test="login-button"]');
        this.lockedOutUserError = page.locator('[data-test="error"]');
    }

    async openUrl(url) {
        await this.gotoUrl(url);
    }

    async login(username, password) {
        await this.enterText(this.userName, username);
        await this.enterText(this.password, password);
        await this.clickElement(this.clkBtn);
    }
}