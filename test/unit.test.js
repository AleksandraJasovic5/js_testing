const MyMath = require('../Maths');
const assert = require('assert');

describe('Maths test', async function() {
    it('Test if 1 + 1 = 2', function() {
        assert.equal(MyMath.add(1,1), 2);
    });
    it('Test if 4 - 3 = 1', async function() {
        assert.equal(MyMath.sub(4,3), 1);
    });
    it('Test if 16 / 4 = 4', async function() {
        assert.equal(MyMath.divide(16,4), 4);
    });
    it('Test if 2 * 3 * 5 = 30', function() {
        assert.equal(MyMath.multiply(2, 3, 5), 30);
    });
});   