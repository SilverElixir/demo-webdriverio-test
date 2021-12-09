const Page = require('./page');

class SidebarPage extends Page{

    async navigateToAboutUsPage(){
        await $('//*[@href="#/about"]').click();
    }
}

module.exports = new SidebarPage();