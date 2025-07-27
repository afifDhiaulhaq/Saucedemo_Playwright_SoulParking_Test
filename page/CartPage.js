import { expect } from '@playwright/test';

class CartPage{
    constructor(page){
        this.page = page;
        // icon cart
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        // button continue shipping
        this.continueButton = page.locator('#continue-shopping');
        // button checkout
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }
    // menuju halaman cart
    async goto(){
        await this.cartLink.click();
    }
    // verifikasi item tersedia pada cart
    async itemsAvailableInCart(name){
        const item= this.page.locator('.cart_item', {
            has: this.page.locator('.inventory_item_name', { hasText: name }),
        });
        await expect(item).toBeVisible();
    }
    // varifikasi item sudah hilang fari cart
    async removeItemIncart(name){
        const item= this.page.locator('.cart_item', {
            has: this.page.locator('.inventory_item_name', { hasText: name }),
        });
        const buttonRemove = item.locator('button');
        await buttonRemove.click();
        await expect(item).toHaveCount(0);
    }
    // kembali ke halaman inventory
    async continueShoping(){
        await this.continueButton.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
    // checkout cart
    async checkoutCart(){
        await this.checkoutButton.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    }
}

export default CartPage;