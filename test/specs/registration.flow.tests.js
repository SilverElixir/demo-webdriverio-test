import loginPage from './../../core/pageobjects/login.page';
// const loginPage = require('./../../core/pageobjects/login.page');
import mainPage from '../../core/pageobjects/main.page';
// const mainPage = require('../../core/pageobjects/main.page');
import userTestData from '../test-data/user.login.credentials.json';

describe('juice-shop registration test suite', () => {

    it('user should successfully register with valid data', () => {
        mainPage.open('register');
        browser.pause(5000);
        mainPage.proceedToLoginOverlay();
        loginPage.login(userTestData[1].email, userTestData[1].password);
        expect(loginPage.loginErrorMsg).toHaveTextContaining(
            'Invalid email or password.');
    });
    
    it('login should fail with invalid credentials (unregistered email)', () => {
        loginPage.login(userTestData[2].email, userTestData[2].password);
        expect(loginPage.loginErrorMsg).toHaveTextContaining(
            'Invalid email or password.');
    });

});