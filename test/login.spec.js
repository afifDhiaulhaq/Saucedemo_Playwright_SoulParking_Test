import { test } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import attachScreenshot from '../utils/screenshot';

async function setup(page){
    const loginpage = new LoginPage(page); 
    await loginpage.goto(); 
    return loginpage;
}

test('Login dengan credential benar', async ({page},testInfo) => {
    try {
        const loginpage = await setup(page);
        await loginpage.login('standard_user','secret_sauce'); 
        await loginpage.loginSuccessfull('https://www.saucedemo.com/inventory.html') 
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }
})

test('Login dengan credential salah', async ({page},testInfo) => {
    try {
        const loginpage = await setup(page);
        await loginpage.login('wrong_username','wrong_password');
        await loginpage.loginFailled('Username and password do not match any user in this service');
    } catch (error) {
        await attachScreenshot(page, testInfo);
        throw error;
    }
})

