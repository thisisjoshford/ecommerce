const test = QUnit.test;
import findByID from 
test('should return name when presented ID', function(assert) {

    const glassID = '1' ;
    const description = glassArt[1]; 
    const expected = 'Lyon\'s Collab';
    const result = findByID(glassID, description);

    assert.equal(result, expected);
});
