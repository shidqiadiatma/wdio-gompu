const Page = require('./page');

class updateprofilePage extends Page {
    get subMenu_profile () {
        return $('//*[@id="__layout"]/div/div/header/div[1]/div[1]/div[2]/a[4]');
    }
    get menu_ubahProfile () {
        return $('//*[@id="__layout"]/div/div/div[1]/ol/li[1]/a/p');
    }
    get button_ok () {
        return $('/html/body/div[2]/div/div[3]/button[1]');
    }
    get input_fullName(){
        return $('//*[@id="__layout"]/div/div/form/input[1]')
    }   
    get input_email(){
        return $('//*[@id="__layout"]/div/div/form/input[2]')
    }
    get input_noPhone(){
        return $('[type="number"]')
    }
    get select_jenisKelamin(){
        return $('//*[@id="__layout"]/div/div/form/select')
    }
    get input_tanggalLahir(){
        return $('//*[@id="__layout"]/div/div/form/input[3]')
    }
    get input_city(){
        return $('//*[@id="__layout"]/div/div/form/input[4]')
    }
    get button_save () {
        return $('button[type="submit"]');
    }
    async go_to_updateProfilePage() {
        await this.button_ok.click();
        await this.subMenu_profile.click();
        await this.menu_ubahProfile.click();
    }

    async ClearAllData(){
        await this.input_fullName.clearValue();
        await this.input_email.clearValue();
        await this.input_noPhone.clearValue();
        await this.input_tanggalLahir.clearValue();
        await this.input_city.clearValue();
        await this.button_save.click();
    }
    async updateData(fullname, email, noPhone, valueSelect, tglLahir, city){
        await this.input_fullName.setValue(fullname);
        await this.input_email.setValue(email);
        await this.input_noPhone.setValue(noPhone);
        await this.select_jenisKelamin.selectByVisibleText(valueSelect)
        await this.input_tanggalLahir.setValue(tglLahir)
        await this.input_city.setValue(city);
        await this.button_save.click();
    }
    open () {
        return super.open();
    }
}
module.exports = new updateprofilePage();

