const Page = require('./page');

class AboutUsPage extends Page {

    async proceedToTwitter(){ 
        await $('[aria-label*="Twitter"]').click();
    }

    async proceedToFacebook(){ 
        await $('[aria-label*="Facebook"]').click();
    }

    async proceedToSlack(){ 
        await $('[aria-label*="Slack"]').click();
    }

    async proceedToReddit(){ 
        await $('[aria-label*="Reddit"]').click();
    }

}

module.exports = new AboutUsPage();