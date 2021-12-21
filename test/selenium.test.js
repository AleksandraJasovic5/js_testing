

const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chai = require ('chai');
const assert = chai.assert;
const expect = chai.expect;


describe('Selenium Tests', function() {

    let driver;
   
    before(async function() {
        let service = new chrome.ServiceBuilder('E:\\QA kurs\\js_testing\\chromedriver\\chromedriver.exe').build()
        chrome.setDefaultService(service);

        driver = await new Builder().forBrowser('chrome').build();
        

    });
    after(async function() {
        await driver.quit();
    });
describe('Oppening page', function() {
    it('Open Google.com', async function() {
        await driver.get('https://google.com/');
        const pageTitle = await driver.getTitle();
        console.log(pageTitle);
        
        expect(pageTitle).to.contain('Google');
    });
});
});


