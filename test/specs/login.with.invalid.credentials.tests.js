const loginPage = require('../pageobjects/login.page');
const mainPage = require('../pageobjects/main.page');
const welcomePage = require('../pageobjects/welcome.page');
const userTestData = require('../test-data/user.login.credentials.json');

describe('juice-shop login test suite', () => {

    it('login should fail with invalid credentials (valid email/wrong password)', async () => {
        mainPage.open();
        browser.pause(5000);
        mainPage.proceedToLoginOverlay();
        await loginPage.login(userTestData[1].email, userTestData[1].password);
        await expect(loginPage.loginErrorMsg).toHaveTextContaining(
            'Invalid email or password.');
    });
    
    it('login should fail with invalid credentials (unregistered email)', async () => {
        await loginPage.login(userTestData[2].email, userTestData[2].password);
        await expect(loginPage.loginErrorMsg).toHaveTextContaining(
            'Invalid email or password.');
    });

});
