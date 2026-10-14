import { test, expect } from '../fixtures/BaseFixture.js';
import { ROUTES, TITLES } from '../utils/constants.js';
import env from '../config/env.config.js';

const BACKPACK = 'Sauce Labs Backpack';
const BIKE_LIGHT = 'Sauce Labs Bike Light';

test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.openUrl(ROUTES.LOGIN_PAGE);
    await loginPage.login(env.username, env.password);
    await expect(page).toHaveURL(ROUTES.PRODUCTS_PAGE);
});

test('products page displays all available products', async ({ page, productPage }) => {
    await expect(page.getByText(TITLES.PRODUCTS_PAGE_TITLE, { exact: true })).toBeVisible();
    await expect(productPage.productCards).toHaveCount(6);
});

test('adding products updates the cart badge and cart contents', async ({ page, productPage, cartPage }) => {
    await productPage.addToCart(BACKPACK);
    await productPage.addToCart(BIKE_LIGHT);
    await expect(productPage.cartBadge).toHaveText('2');

    await productPage.openCart();
    await expect(page).toHaveURL(ROUTES.CART_PAGE);
    await expect(cartPage.cartItems).toHaveCount(2);
    await expect(cartPage.cartItemNames).toHaveText([BACKPACK, BIKE_LIGHT]);
});

test('removing a product from the products page restores its add button and clears the cart badge', async ({ productPage }) => {
    await productPage.addToCart(BACKPACK);
    await expect(productPage.cartBadge).toHaveText('1');

    await productPage.removeFromCart(BACKPACK);
    await expect(productPage.addToCartButton(BACKPACK)).toBeVisible();
    await expect(productPage.cartBadge).toHaveCount(0);
});

test('removing a product from the cart leaves the cart empty', async ({ productPage, cartPage }) => {
    await productPage.addToCart(BACKPACK);
    await productPage.openCart();

    await cartPage.removeProduct(BACKPACK);
    await expect(cartPage.cartItems).toHaveCount(0);
});

test('continue shopping returns from the cart to the products page', async ({ page, productPage, cartPage }) => {
    await productPage.addToCart(BACKPACK);
    await productPage.openCart();

    await cartPage.continueShopping();
    await expect(page).toHaveURL(ROUTES.PRODUCTS_PAGE);
});
