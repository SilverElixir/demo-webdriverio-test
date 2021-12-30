import loginPage from '../../core/pageobjects/login.page.js';
// const loginPage = require('./../../core/pageobjects/login.page');
import mainPage from '../../core/pageobjects/main.page.js';
// const mainPage = require('../../core/pageobjects/main.page');
import welcomePage from '../../core/pageobjects/welcome.page.js';
// const welcomePage = require('../../core/pageobjects/welcome.page');
// const userTestData = require('../test-data/user.login.credentials.json');
// import userTestData from '../test-data/user.login.credentials.json';

import { readFile } from 'fs/promises';
const userTestData = JSON.parse(await readFile('./test/test-data/user.login.credentials.json'));

describe('juice-shop login test suite', () => {

    it('should login with valid credentials', async () => {
        await mainPage.open('/');
        //browser.pause(3000);
        await mainPage.proceedToLoginOverlay();
        await loginPage.login(userTestData[0].email, userTestData[0].password);
        
        expect(welcomePage.basketBtn).toBeExisting();
        // TODO: await welcomePage.checkEmailOfLoggedInUser(userTestData[0].email);
        // await welcomePage.logout();
    });

    // it('get content from table cell', async () => {
    //     await browser.url('http://the-internet.herokuapp.com/tables');
    //     const rows = await $$('#table1 tr');
    //     const columns = await rows[1].$$('td'); // get columns of 2nd row
    //     console.log(await columns[2].getText()); // get text of 3rd column
    // });

});
