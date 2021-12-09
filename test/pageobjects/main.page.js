const Page = require('./page');

class MainPage extends Page {

    async open(url) {
        await super.open(url);
        await $('button.close-dialog').click();
    }

    async proceedToLoginOverlay() {
        await $('#navbarAccount').click();
        await $('button[routerlink="/login"]').click();
    }

    async openLeftSidebarMenu(){
        await $('//*[@aria-label="Open Sidenav"]').click();
    }

}

module.exports = new MainPage();
