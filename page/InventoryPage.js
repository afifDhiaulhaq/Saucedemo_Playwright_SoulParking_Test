import { expect } from '@playwright/test';

class InventoryPage{
    constructor(page){
        this.page = page;
        // cart bedge
        this.cartBedge = page.locator('[data-test="shopping-cart-badge"]')
    }
    // menuju halaman inventory
    async goto(){
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }
    // memilih dan menambahkan item ke cart berdasarkan nama
    async addToCartByNameItem(name) {
        const item = this.page.locator('.inventory_item', {
            has: this.page.locator('.inventory_item_name', { hasText: name }),
        });
        const buttonRemove = item.locator('button');
        const buttonAdd = item.locator('button');
        await buttonAdd.click();
        await expect(buttonAdd).toHaveText('Remove');
    }
    // verivikasi jumlah bedge cart
    async addItemCartSuccessfull(){
        await expect(this.cartBedge).toHaveText('1');
    }
    // memilih dan menghilangkan item pada cart berdasarkan nama
    async removeCartByNameItem(name){
        const item = this.page.locator('.inventory_item', {
            has: this.page.locator('.inventory_item_name', { hasText: name }),
        });
        const buttonRemove = item.locator('button');
        await buttonRemove.click();
        await buttonRemove.click();
        await expect(buttonRemove).toHaveText('Add to cart');
    }
    // verivikasi jumlah bedge cart kosong
    async removeItemCartSuccessfull(){
        await expect(this.cartBedge).toHaveCount(0);
    }
}

export default InventoryPage;