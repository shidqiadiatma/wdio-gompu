const Page = require('./page');

class popUpCommponent extends Page {
    get popUpAlert () {
        return $('#swal2-title');
    }
    get alertMessage_password () {
        return $('//*[@id="__layout"]/div/div/div[2]/div/main/form/span');
    }
    open () {
        return super.open();
    }
}
module.exports = new popUpCommponent();

