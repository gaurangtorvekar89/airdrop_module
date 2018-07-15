'use strict';

var expect = require('chai').expect;
var tester = require('../index');

describe('#tester', function(){
	it ('should console.log', function(){
		var result = tester.tester(1);
		expect(result).to.equal('1');
	});
});