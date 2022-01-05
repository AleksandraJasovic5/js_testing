const {Builder, By, until, Key, logging} = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');
const { assert } = require('chai');

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
 it('Succesfully performs registration', async function() {
const ime = await driver.findElement(By.name('ime'));
ime.sendKeys('Bob');

const prezime = await driver.findElement(By.name('prezime'));
prezime.sendKeys('Buttons');

const email = await driver.findElement(By.name('email'));
email.sendKeys('bob.buttons@examle.local');

const korisnicko = await driver.findElement(By.name('korisnicko'));
korisnicko.sendKeys('bob.buttons');

const lozinka = await driver.findElement(By.name('lozinka'));
lozinka.sendKeys('123');

const lozinkaOpet = await driver.findElement(By.name('lozinkaOpet'));
lozinkaOpet.sendKeys('123');

const registracija = await driver.findElement(By.name('register'));
await registracija.click();

expect(await driver.findElement(By.className('alert alert-success')).getText()).to.contain('Uspeh!');

});
it ('Opens Login page', async function() {
    const login = await driver.findElement(By.linkText('Login'));
    await login.click();

expect(await driver.findElement(By.css('h2')).getText()).to.contain('Prijava');    
});
it('Succesfully performs Login', async function() {
    const korisnickoime = await driver.findElement(By.name('username'));
    korisnickoime.sendKeys('bob.buttons');

    const lozinka = await driver.findElement(By.name('password'));
    lozinka.sendKeys('123');

    const ulogujse = await driver.findElement(By.name('login'));
    await ulogujse.click();

    expect(await driver.findElement(By.css('h2')).getText()).to.contain('Welcome back');
});
it('Add item to cart-Starter,  2 items', async function() {
    const packageName = await driver.findElement(By.xpath('//h3[contains(text(), "starter")]/ancestor::div[contains(@class, "panel")]'));
    const quantity = await packageName.findElement(By.name('quantity'));
    const options = await quantity.findElements(By.css('option'));

    await Promise.all(options.map(async function (option) {
        const text = await option.getText();
        if(text === '2') {
        await option.click();

        const selectedValue = await quantity.getAttribute('value');

        expect(selectedValue).to.contain('2');

        

        const orderButton = await packageName.findElement(By.className('btn btn-primary'));
        await orderButton.click();

        const Url = await driver.getCurrentUrl();
        expect(Url).to.contain('http://shop.qa.rs/order');
        }
    
    }));
    
});
it('Opens shoping cart', async function() {
    const shopCart = await driver.findElement(By.partialLinkText('View shopping'));
    await shopCart.click();

    expect(await driver.findElement(By.css('h1')).getText()).to.contain('Order');
});
it('Verifies items are i chart - Starter, 2 items', async function() {
    const orderTable = await driver.findElement(By.css('table'));
    const orderRow = await orderTable.findElement(By.xpath('//table//td[contains(., "STARTER")]/parent::tr'));

    const orderQty = await orderRow.findElement(By.xpath('td[2]'));

    expect(await orderQty.getText()).to.eq('2');
});
it('Verifies total item price is correct', async function() {
    const orderTable = await driver.findElement(By.css('table'));
    const orderRow = await orderTable.findElement(By.xpath('//table//td[contains(., "STARTER")]/parent::tr'));

    const orderQty = await orderRow.findElement(By.xpath('td[2]'));
    const orderPrice = await orderRow.findElement(By.xpath('td[3]'));
    const orderTotal = await orderRow.findElement(By.xpath('td[4]'));


    const price = Number((await orderPrice.getText()).substring(1));
    const total = Number ((await orderTotal.getText()).substring(1));
    const quantity = Number (await orderQty.getText());
    
    const calculatedTotal = quantity * price;

    expect(calculatedTotal).to.be.equal(total);
});
it('Performs checkout', async function() {
const checkoutBtn = await driver.findElement(By.name('checkout'));
await checkoutBtn.click();
expect(await driver.findElement(By.css('h2')).getText()).to.contain('order');
});
it('Performs Logout', async function() {
const LogoutBtn = await driver.findElement(By.partialLinkText('Logout'));
await LogoutBtn.click();
expect(await driver.findElement(By.linkText('Login')).isDisplayed()).to.be.true;
});
});