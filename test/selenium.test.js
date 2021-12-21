

const webdriver = require('selenium-webdriver');
const assert = require('assert');


describe('Selenium Tests', function() {

    let driver;
   
    before(async function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        await driver.get('https://google.com/');

    });
    after(async function() {
        await driver.quit();
    });

    it('Open Google.com', async function() {
        
        assert.equal(1,1);
    });
});


