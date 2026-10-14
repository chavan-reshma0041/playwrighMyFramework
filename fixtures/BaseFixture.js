import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage/LoginPage.js';
import { ProductPage } from '../pages/productPage/ProductPage.js';
import { CartPage } from '../pages/cartPage/CartPage.js';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login);
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
});

export { expect } from '@playwright/test';