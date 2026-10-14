import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage/LoginPage.js';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login);
    }
});

export { expect } from '@playwright/test';