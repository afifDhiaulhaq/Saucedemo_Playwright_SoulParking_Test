import { test } from '@playwright/test';
import InventoryPage from '../page/InventoryPage';
import LoginPage from '../page/LoginPage';
import CartPage from '../page/CartPage';
import attachScreenshot from '../utils/screenshot';

async function setup(page){
    const inventoryPage = new InventoryPage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce'); 
    await inventoryPage.goto();
    await inventoryPage.addToCartByNameItem('Sauce Labs Backpack');
    await cartPage.goto();
    return cartPage;
}

test('Melihat item inventory yang sudah ditambahkan pada cart', async ({page},testInfo) =>{
    try {
        const cartPage = await setup(page);
        await cartPage.itemsAvailableInCart('Sauce Labs Backpack');
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }
})
test('Menghilagkan item inventory pada halaman cart', async ({page},testInfo) =>{
    try {
        const cartPage = await setup(page);
        await cartPage.removeItemIncart('Sauce Labs Backpack');
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }
})
test('Kembali ke halaman Inventory', async({page},testInfo) => {
    try {
        const cartPage = await setup(page);
        await cartPage.continueShoping();
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }

})
test('Berhasil ke halaman checkout informarion', async ({page},testInfo) => {
    try {
        const cartPage = await setup(page);
        await cartPage.checkoutCart();
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }
})