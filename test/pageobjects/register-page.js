const Page = require('./page');

class RegisterPage extends Page {
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
    open () {
        return super.open();
    }
}
module.exports = new RegisterPage();

