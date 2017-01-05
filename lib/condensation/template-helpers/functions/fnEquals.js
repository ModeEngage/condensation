var _ = require("lodash");
var cValue = require("../cValue");

/*
 * @param {string} v1 - first value to compare
 * @param {string} v2 - second value to compare
 * @return {String} A JSON compliant string for CloudFormation
 */
module.exports = function(v1,v2,options) {
  v1 = cValue(v1);
  v2 = cValue(v2);
  options = _.merge({hash: {}}, options);

  return '{"Fn::Equals": ['+v1+','+v2+']}';

};