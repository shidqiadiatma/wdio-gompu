const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class forgotPasswordPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnloginPage () {
        return $('//*[@id="__layout"]/div/div/header/div[1]/div[2]/a');
    }
    get btnForgotpassword () {
        return $('//*[@id="__layout"]/div/div/div/div/main/form/p[2]/a');
    }
    get inputEmail () {
        return $('input[type="email"]');
    }
    get button_submit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async go_to_forgotPasswordPage(){
        await this.btnloginPage.click()
        await this.btnForgotpassword.click()
    }
    async forgotPassword (email) {
        await this.inputEmail.setValue(email);
        await this.button_submit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new forgotPasswordPage();
