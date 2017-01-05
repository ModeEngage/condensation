var _ = require("lodash");
var cValue = require("../cValue");

/*
 * @param {string}  - The logicalId to reference
 * @param {Object} options - options for creting the logicalId reference
 * @return {String} A JSON compliant Ref object for CloudFormation
 */
module.exports = function() {
  var index = cValue(arguments[0]);
  var joinValues = _.slice(arguments, 1, arguments.length-1);
  var options = arguments[arguments.length-1];

  joinValues = _.map(joinValues, function(v) { return cValue(v) });

  options = _.merge({hash: {}}, options);

  return '{"Fn::Select": ['+index+',['+joinValues.join(",")+']]}';

};