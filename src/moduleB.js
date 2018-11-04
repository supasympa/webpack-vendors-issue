const flatten = require('array-flatten');

module.exports.log = function(msg){
	console.log(`ModuleB logging: ${msg}`);
    console.log(`flattened: ${flatten([[1,2,3],[4,5],[6,7]])}`)
};
