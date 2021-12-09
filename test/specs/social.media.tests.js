const sidebarMenu = require('../pageobjects/sidebar.menu');
const mainPage = require('../pageobjects/main.page');
const aboutUsPage = require('../pageobjects/about.us.page');

const juiceShopText = 'owasp_juiceshop'; 

describe('Social Media tests', () => {

    beforeEach(() => {
        mainPage.open('/about');
        // mainPage.openLeftSidebarMenu();
        // sidebarMenu.navigateToAboutUsPage();
    });

    it('Twitter redirect', async () => {
        aboutUsPage.proceedToTwitter();
        browser.pause(5000);
        browser.switchWindow(juiceShopText);
        //await expect(browser).toHaveUrlContaining(juiceShopText);
        expect(browser).toHaveTitle('OWASP Juice Shop (@owasp_juiceshop) / Twitter');
    });

    it('Facebook redirect', async () => {
        aboutUsPage.proceedToFacebook()
        browser.pause(3000)
        browser.switchToWindow()
        // await expect(browser).toHaveUrlContaining(juiceShopText)
        expect(browser).toHaveTitle('OWASP Juice Shop - Home | Facebook')
    });

    it('Slack redirect', async () => {
        aboutUsPage.proceedToSlack()
        browser.pause(3000)
        // await expect(browser).toHaveUrlContaining('https://owasp.org/slack/invite')
        expect(browser).toHaveTitle('Slack Invite | OWASP')
    });

    it('Reddit redirect', async () => {
        aboutUsPage.proceedToReddit()
        browser.pause(3000)
        // await expect(browser).toHaveUrlContaining(juiceShopText)
        expect(browser).toHaveTitle(juiceShopText)
    });
})