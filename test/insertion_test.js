'use strict';

const	should = require('chai').should(),
			sorter = require('../index.js');


describe('sorter', function() {
	describe('bubble', function() {
		it('Should sort the array in ascending order based on numerical value', function() {

			let dataSet = [1,0,5,4,2,3],
					control = [0,1,2,3,4,5],
					sortedData = sorter.bubble(dataSet);

			sortedData.should.be.a('array');
			sortedData.should.deep.equal(control);

		});
	});
});
