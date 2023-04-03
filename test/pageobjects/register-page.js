

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnloginPage () {
        return $('//*[@id="__layout"]/div/div/header/div[1]/div[2]/a');
    }
    get btnregisterPage () {
        return $('/html/body/div/div/div/div/div/div/main/form/p[3]/a');
    }
    get inputFullname () {
        return $('input[type="text"]');
    }
    get inputEmail () {
        return $('input[type="email"]');
    }
    get inputPassword () {
        return $('input[type="password"]');
    }
    get button_registrasi () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async go_to_registerPage() {
        await this.btnloginPage.click();
        await this.btnregisterPage.click();
    }

    async register (fullname,email, password) {
        await this.inputFullname.setValue(fullname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.button_registrasi.click();
    }

   

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new RegisterPage();
