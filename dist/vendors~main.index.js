exports.ids = ["vendors~main"];
exports.modules = {

/***/ "./node_modules/array-flatten/array-flatten.js":
/*!*****************************************************!*\
  !*** ./node_modules/array-flatten/array-flatten.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Expose `arrayFlatten`.\n */\nmodule.exports = flatten\nmodule.exports.from = flattenFrom\nmodule.exports.depth = flattenDepth\nmodule.exports.fromDepth = flattenFromDepth\n\n/**\n * Flatten an array.\n *\n * @param  {Array} array\n * @return {Array}\n */\nfunction flatten (array) {\n  if (!Array.isArray(array)) {\n    throw new TypeError('Expected value to be an array')\n  }\n\n  return flattenFrom(array)\n}\n\n/**\n * Flatten an array-like structure.\n *\n * @param  {Array} array\n * @return {Array}\n */\nfunction flattenFrom (array) {\n  return flattenDown(array, [])\n}\n\n/**\n * Flatten an array-like structure with depth.\n *\n * @param  {Array}  array\n * @param  {number} depth\n * @return {Array}\n */\nfunction flattenDepth (array, depth) {\n  if (!Array.isArray(array)) {\n    throw new TypeError('Expected value to be an array')\n  }\n\n  return flattenFromDepth(array, depth)\n}\n\n/**\n * Flatten an array-like structure with depth.\n *\n * @param  {Array}  array\n * @param  {number} depth\n * @return {Array}\n */\nfunction flattenFromDepth (array, depth) {\n  if (typeof depth !== 'number') {\n    throw new TypeError('Expected the depth to be a number')\n  }\n\n  return flattenDownDepth(array, [], depth)\n}\n\n/**\n * Flatten an array indefinitely.\n *\n * @param  {Array} array\n * @param  {Array} result\n * @return {Array}\n */\nfunction flattenDown (array, result) {\n  for (var i = 0; i < array.length; i++) {\n    var value = array[i]\n\n    if (Array.isArray(value)) {\n      flattenDown(value, result)\n    } else {\n      result.push(value)\n    }\n  }\n\n  return result\n}\n\n/**\n * Flatten an array with depth.\n *\n * @param  {Array}  array\n * @param  {Array}  result\n * @param  {number} depth\n * @return {Array}\n */\nfunction flattenDownDepth (array, result, depth) {\n  depth--\n\n  for (var i = 0; i < array.length; i++) {\n    var value = array[i]\n\n    if (depth > -1 && Array.isArray(value)) {\n      flattenDownDepth(value, result, depth)\n    } else {\n      result.push(value)\n    }\n  }\n\n  return result\n}\n\n\n//# sourceURL=webpack:///./node_modules/array-flatten/array-flatten.js?");

/***/ })

};;