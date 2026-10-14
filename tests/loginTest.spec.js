
import { test, expect } from '../fixtures/BaseFixture.js';
import { TITLES, ROUTES } from '../utils/constants.js';
import env from '../config/env.config.js';

test('Login test with valid credentials', async ({ loginPage }) => {
    await loginPage.openUrl(ROUTES.LOGIN_PAGE);
    await loginPage.login(env.username, env.password);
    await expect(loginPage.page.getByText(TITLES.PRODUCTS_PAGE_TITLE, { exact: true })).toBeVisible();
});