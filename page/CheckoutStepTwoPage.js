import { expect } from '@playwright/test';

class CheckoutStepTwoPage{
    constructor(page){
        this.page = page;
        // finish button
        this.finishButton = page.locator('#finish');
    }
    // klik finish checkout
    async finishCheckout(){
        await this.finishButton.click();
    }
    // verifikasi menuju halaman checkout complete
    async finishCheckoutSuccessfull(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    }
}

export default CheckoutStepTwoPage;