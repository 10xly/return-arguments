const slice = require("uncurried-intrinsics")("Array.prototype.slice")

exports.asArguments = function fn() {
  return arguments
}

exports.asArray = function fn() {
  return slice(arguments)
}