const loginPage = require('../pageobjects/login.page');
const mainPage = require('../pageobjects/main.page');
const welcomePage = require('../pageobjects/welcome.page');
const userTestData = require('../test-data/user.login.credentials.json');

describe('juice-shop login test suite', () => {

    it('should login with valid credentials', async () => {
        mainPage.open();
        browser.pause(3000);
        mainPage.proceedToLoginOverlay();

        await loginPage.login(userTestData[0].email, userTestData[0].password);
        expect(welcomePage.basketBtn).toBeExisting();
        await welcomePage.checkEmailOfLoggedInUser(userTestData[0].email);
        // await welcomePage.logout();
    });

});
