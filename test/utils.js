import findByID from '../common/findByID.js';
import glassArt from '../data/glassArt.js';
import glassOrder from '../data/cart.js';
import calcLineItem from '../common/calcLineItem.js';

const test = QUnit.test;

// #3 TDD findByID function
test('should return Name/ Description when presented ID', function(assert) {
    const glassArray = glassArt;
    const glassID = 1 ;
    const expected = 'Lyon\'s Collab';
    const result = findByID(glassID, glassArray);
    assert.equal(result.name, expected);
});

test('should match Price when presented ID', function(assert) {
    const glassArray = glassArt;
    const glassID = 7 ;
    const expected = 600;
    const result = findByID(glassID, glassArray);
    assert.equal(result.price, expected);
});

test('should match image when presented ID', function(assert) {
    const glassArray = glassArt;
    const glassID = 8 ;
    const expected = '../assets/mini.png';
    const result = findByID(glassID, glassArray);
    assert.equal(result.image, expected);
});

//TDD #4 calcLineItem Function
test('should calculate line item 1', function(assert) {
    const lineItem = glassOrder[0];
    const expected = 1200;
    const result = calcLineItem(lineItem);
    assert.equal(result, expected);
});

test('should calculate line item 3', function(assert) {
    const lineItem = glassOrder[2];
    const expected = 600;
    const result = calcLineItem(lineItem);
    assert.equal(result, expected);
});