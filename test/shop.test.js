const {Builder, By, until, Key} = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');

describe('QA Shop Test', function() {
    let driver;

before(async function() {
    let service = new chrome.ServiceBuilder('E:\\QA kurs\\js_testing\\chromedriver\\chromedriver.exe').build()
    chrome.setDefaultService(service);

    driver = await new Builder().forBrowser('chrome').build();
});
after(function() {
   return driver.quit();
});
 it('Opens shop.qa.rs homepage', async function() {
await driver.get('http://shop.qa.rs/');

expect(await driver.findElement(By.css('h1')).getText()).to.contain('(QA) Shop');
 }); 
 it('Goest to registration page', async function() {
     const register = await driver.findElement(By.linkText('Register'));
     await register.click();
     
     expect(await driver.findElement(By.name('register')).getAttribute('value')).to.contain('Register');
 });   
});