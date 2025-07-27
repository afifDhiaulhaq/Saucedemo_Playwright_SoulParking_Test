import { test } from '@playwright/test';
import InventoryPage from '../page/InventoryPage';
import LoginPage from '../page/LoginPage';
import attachScreenshot from '../utils/screenshot';

async function setup(page){
    const inventoryPage = new InventoryPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce'); 
    await inventoryPage.goto();
    return inventoryPage;
}

test('Menambahkan inventory ke cart', async ({page},testInfo) =>{
    try {
        const inventoryPage = await setup(page);
        await inventoryPage.addToCartByNameItem('Sauce Labs Backpack');
        await inventoryPage.addItemCartSuccessfull();
    } catch (error) {

        await attachScreenshot(page, testInfo);
        throw error;
    }
})

test('Menghilangkan item inventory pada cart', async ({page},testInfo) => {
    try {
        const inventoryPage = await setup(page);
        await inventoryPage.removeCartByNameItem('Sauce Labs Backpack');
        await inventoryPage.removeItemCartSuccessfull();
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }
})
