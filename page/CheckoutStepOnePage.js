import { expect } from '@playwright/test';

class CheckOutStepOne{
    constructor(page){
        this.page = page;
        // form first name
        this.firstName = page.locator('#first-name');
        // form last name
        this.lastName = page.locator('#last-name');
        // form postal code
        this.postalCode = page.locator('#postal-code');
        // button continue
        this.continueButton = page.locator('#continue');
        // error message
        this.errorMsg = page.locator('[data-test="error"]');
    }
    
    async inputFormInformation(first,last,code){
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(code);
        await this.continueButton.click(); 
    }
    async inputFormInformationSuccessfull(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    }

    async informationInvalid(){
        await expect(this.errorMsg).toHaveCount(1);
    }
}

export default CheckOutStepOne;