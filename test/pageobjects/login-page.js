

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnloginPage () {
        return $('//*[@id="__layout"]/div/div/header/div[1]/div[2]/a');
    }
    get inputEmail () {
        return $('input[type="email"]');
    }
    get inputPassword () {
        return $('input[type="password"]');
    }
    get button_login () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async go_to_LoginPage() {
        await this.btnloginPage.click();
    }
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.button_login.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
