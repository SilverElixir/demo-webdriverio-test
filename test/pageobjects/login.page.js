const Page = require('./page');

/**
 * GET {juice_shop_url}:3000/#/login
 */
class LoginPage extends Page {

    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get submitBtn() {
        return $('button#loginButton');
    }

    get loginErrorMsg(){
        return $('.error.ng-star-inserted');
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.submitBtn.click();
    }

}

module.exports = new LoginPage();
