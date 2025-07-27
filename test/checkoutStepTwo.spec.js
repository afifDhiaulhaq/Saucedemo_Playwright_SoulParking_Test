import { test } from '@playwright/test';
import InventoryPage from '../page/InventoryPage';
import LoginPage from '../page/LoginPage';
import CartPage from '../page/CartPage';
import CheckOutStepOne from '../page/CheckoutStepOnePage';
import CheckoutStepTwoPage from '../page/CheckoutStepTwoPage';
import attachScreenshot from '../utils/screenshot';


async function setup(page){
    const inventoryPage = new InventoryPage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkOutStepOne = new CheckOutStepOne(page);
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce'); 
    await inventoryPage.goto();
    await inventoryPage.addToCartByNameItem('Sauce Labs Backpack');
    await cartPage.goto();
    await cartPage.checkoutCart();
    await checkOutStepOne.inputFormInformation('afif','dhiaulhaq','14041');
    return checkoutStepTwoPage;
}

test('menyelesaikan checkout', async ({page},testInfo) => {
    try {
        const checkoutStepTwoPage = await setup(page);
        await checkoutStepTwoPage.finishCheckout();
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }
    
})