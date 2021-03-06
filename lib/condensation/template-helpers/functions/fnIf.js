var _ = require("lodash");
var cValue = require("../cValue");

/**
 * Fn::If definition
 * @function fnIf
 * @memberof "IntrinsicFunctions"
 * @type {function}
 * @param {string} conditionName - Name of the condition to reference
 * @param {string} trueValue - value to use if condition is true
 * @param {string} falseValue - value to use if condition is false
 * @param {Object} options - options passed by handlebars
 * @returns {string}
 */
module.exports = function fnIf(conditionName, trueValue, falseValue, options) {
  trueValue = cValue(trueValue);
  falseValue = cValue(falseValue);
  options = _.merge({hash: {}}, options);

  return '{"Fn::If": ["'+conditionName+'",'+trueValue+','+falseValue+']}';

};
