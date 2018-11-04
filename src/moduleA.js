const moduleB = require('./moduleB');
const flatten = require('array-flatten');

module.exports.log = function(msg){
	moduleB.log('logging from moduleA.js');
	console.log(`ModuleA logging: ${msg}`);
	console.log(`flattened: ${flatten([[1,2,3],[4,5],[6,7]])}`)
};
