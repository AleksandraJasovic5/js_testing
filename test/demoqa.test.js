'use strict'
const { Builder, By, until, Key } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');

describe('QA Demoqa Tests', function() {
    let driver;
    let service = new chrome.ServiceBuilder('E:\\QA kurs\\js_testing\\chromedriver\\chromedriver.exe').build()
        chrome.setDefaultService(service);

        driver = await new Builder().forBrowser('chrome').build();
});
after(function() {
    return driver.quit();
 });

