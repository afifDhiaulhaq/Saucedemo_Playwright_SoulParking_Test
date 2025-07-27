import { test } from '@playwright/test';
import InventoryPage from '../page/InventoryPage';
import LoginPage from '../page/LoginPage';
import CartPage from '../page/CartPage';
import CheckOutStepOne from '../page/CheckoutStepOnePage';
import attachScreenshot from '../utils/screenshot';

async function setup(page){
    const inventoryPage = new InventoryPage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkOutStepOne = new CheckOutStepOne(page);
    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce'); 
    await inventoryPage.goto();
    await inventoryPage.addToCartByNameItem('Sauce Labs Backpack');
    await cartPage.goto();
    await cartPage.checkoutCart();
    return checkOutStepOne;
}

test('input valid information checkout', async ({page},testInfo) => {
    try {
        const checkOutStepOne = await setup(page);
        await checkOutStepOne.inputFormInformation('afif','dhiaulhaq','14041');
        await checkOutStepOne.inputFormInformationSuccessfull();
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }
})

test('input invalid information checkout', async ({page},testInfo) => {
    try {
        const checkOutStepOne = await setup(page);
        await checkOutStepOne.inputFormInformation('','','');
        await checkOutStepOne.informationInvalid();
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }
})

