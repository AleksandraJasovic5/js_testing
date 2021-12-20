'use strict'

const webdriver = require('selenium-webdriver');
const assert = require('assert');
const MyMath = require('../Maths');

describe('Selenium Tests', function() {
    it('Test if 1 equals 1', async function() {
        assert.equal(1,1);
    });
});
describe('Maths test', async function() {
    it('Test if 1 + 1 = 2', function() {
        assert.equal(MyMath.add(1,1), 2);
    });

});