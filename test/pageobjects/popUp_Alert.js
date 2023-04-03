const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class popUpCommponent extends Page {
    /**
     * define selectors using getter methods
     */
    get popUpAlert () {
        return $('#swal2-title');
    }
    get alertMessage_password () {
        return $('//*[@id="__layout"]/div/div/div[2]/div/main/form/span');
    }
}
module.exports = new popUpCommponent();
