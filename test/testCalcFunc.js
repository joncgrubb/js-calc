var assert = chai.assert;

describe('Calculator', function () {
	
	describe('properAppend', function() {

		it('append 1 to empty', function() {
			assert(properAppend("", "1"), '1');
		});
		it('append 2 to 0', function() {
			assert(properAppend("0", "2"), '2');
		});
		it('append 4 to 3', function() {
			assert(properAppend("3", "4"), '34');
		});

	// still need tests with decimals
	});

	describe('sign', function() {
		it('sign on 0', function() {
			assert(sign(0), 0);
		});
		it('sign on negative number', function() {
			assert(sign(-1), 1);
		});
		it('sign on positive number', function() {
			assert(sign(1), -1);
		});
		it('sign on empty string', function() {
			assert(sign(''), 0);
		});
	});

	describe('Calculations', function() {
		describe('function add', function() {
			it('should return 0 when I add 0 and 0', function() {
				var result = calculate("0", "0");
				assert.equal(result, "0");
			});
			it('should return 2 when I add 1 and 1', function() {
				var result = calculate("1", "1");
				assert.equal(result, "2");
			});
			it('should return 1 when I add 0 and 1', function() {
				var result = calculate("0", "1");
				assert.equal(result, "1");
			});
			it('should return 1 when I add 0.5 and 0.5', function() {
				var result = calculate("0.5", "0.5");
				assert.equal(result, "1");
			});
		});
	});

});