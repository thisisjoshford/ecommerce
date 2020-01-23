import findByID from '../common/findByID.js';
import glassArt from '../data/glassArt.js';
const test = QUnit.test;

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