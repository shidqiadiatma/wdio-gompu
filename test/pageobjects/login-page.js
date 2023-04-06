const Page = require('./page');

class LoginPage extends Page {
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
    async go_to_LoginPage() {
        await this.btnloginPage.click();
    }
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.button_login.click();
    }
    open () {
        return super.open();
    }
}
module.exports = new LoginPage();

