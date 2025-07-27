import { expect } from '@playwright/test';

class LoginPage{
    constructor(page){
        this.page = page;
        // form username
        this.usernameInput = page.locator('#user-name'); 
        // form password
        this.passwordInput = page.locator('#password');
        // button login
        this.loginButton = page.locator('#login-button'); 
        // error message
        this.errorMessage = page.locator('[data-test="error"]'); 
    }
    // menuji halaman login
    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    // malakukan login
    async login(username,password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    // verifikasi redirect halaman
    async loginSuccessfull(URL){
        await expect(this.page).toHaveURL(URL);       
    }
    // pesan gagal logins
    async loginFailled(text){
        await expect(this.errorMessage).toContainText(text);
    }
}

export default LoginPage;