import { BasePage } from '../basePage/BasePage.js';

export class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.productCards = page.locator('[data-test="inventory-item"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    productId(productName) {
        return productName.toLowerCase().replaceAll(' ', '-');
    }

    addToCartButton(productName) {
        return this.page.locator(`[data-test="add-to-cart-${this.productId(productName)}"]`);
    }

    removeFromCartButton(productName) {
        return this.page.locator(`[data-test="remove-${this.productId(productName)}"]`);
    }

    async addToCart(productName) {
        await this.addToCartButton(productName).click();
    }

    async removeFromCart(productName) {
        await this.removeFromCartButton(productName).click();
    }

    async openCart() {
        await this.shoppingCartLink.click();
    }
}
