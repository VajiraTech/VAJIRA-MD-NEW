"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCookieOptions = validateCookieOptions;
function validateCookieOptions(opts) {
  if (!('jar' in opts)) {
    throw new TypeError('invalid cookies.jar');
  }
  if (!opts.jar.store.synchronous) {
    throw new TypeError('an asynchronous cookie store is not supported.');
  }
}