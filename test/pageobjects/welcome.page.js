const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * GET {juice_shop_url}:3000/#/search
 */
class WelcomePage extends Page {

    get accountBtn() {
        return $('#navbarAccount');
    }

    get basketBtn() {
        return $('button[routerlink*="basket"]');
    }

    get account_ProfileBtn(){
        return $('[aria-label="Go to user profile"]');
    }

    checkEmailOfLoggedInUser(email){
        this.accountBtn.click();
        // await this.accountBtn.click();
        let actualEmail = this.account_ProfileBtn.getText();
        expect(email).to.equal(actualEmail);
    }

    async logout(){
        await this.accountBtn.click();
        await $('#navbarLogoutButton').click();
    }
}

module.exports = new WelcomePage();
