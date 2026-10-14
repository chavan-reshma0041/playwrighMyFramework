import { BasePage } from '../basePage/BasePage.js';

export class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartItems = page.locator('[data-test="inventory-item"]');
        this.cartItemNames = page.locator('[data-test="inventory-item-name"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }

    async removeProduct(productName) {
        const productId = productName.toLowerCase().replaceAll(' ', '-');
        await this.page.locator(`[data-test="remove-${productId}"]`).click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}
