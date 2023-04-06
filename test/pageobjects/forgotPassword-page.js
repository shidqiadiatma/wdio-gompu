const Page = require('./page');

class forgotPasswordPage extends Page {
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
    async go_to_forgotPasswordPage(){
        await this.btnloginPage.click()
        await this.btnForgotpassword.click()
        await browser.pause(500)
    }
    async forgotPassword (email) {
        await this.inputEmail.setValue(email);
        await this.button_submit.click();
    }
    open () {
        return super.open();
    }
}
module.exports = new forgotPasswordPage();

