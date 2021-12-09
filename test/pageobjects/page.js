/**
* Basic page object containing all methods, selectors and functionality
* that is shared across all child-page objects
*/
module.exports = class Page {

    async open(subUrl) {
        await browser.url("http://localhost:3000/#/" + subUrl);
    }
}
