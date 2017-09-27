var assert = chai.assert;

describe('Easy', function() {
	it('1 equals 1', function() {
		assert.equal(1, 1);
	});
});

describe('Array', function() {
	it('should start empty', function() {
		var arr = [];
		assert.equal(arr.length, 0);
	});

	it('should have 1 value after push', function() {
		var arr = [];
		arr.push('abc');
		assert.equal(arr.length, 1);
	});

	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});

		it('should return 0 when the value is first in', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});

});