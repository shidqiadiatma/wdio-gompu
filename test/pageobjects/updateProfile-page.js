const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class updateprofilePage extends Page {
    /**
     * define selectors using getter methods
     */
    get subMenu_profile () {
        return $('//*[@id="__layout"]/div/div/header/div[1]/div[1]/div[2]/a[4]');
    }
    get menu_ubahProfile () {
        return $('//*[@id="__layout"]/div/div/div[1]/ol/li[1]/a/p');
    }
    

}
module.exports = new updateprofilePage();

