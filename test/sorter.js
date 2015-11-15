'use strict';

const	should  = require('chai').should(),
			sorter  = require('../index.js'),
  		data = [1,0,5,4,2,3],
		  control = [0,1,2,3,4,5];

describe('sorter', function() {
	describe('bubble', function() {
		it('Should sort the array in ascending order based on numerical value', function() {
			let work = sorter.bubble(data);
			commonTest(work);
		});
	});
	describe('insertion', function() {
		it('Should sort the array in ascending order based on numerical value', function() {
			let work = sorter.insertion(data);
			commonTest(work);
		});
	});
});


function commonTest(sortedData) {
	sortedData.should.be.a('array');
	sortedData.should.deep.equal(control);
}
