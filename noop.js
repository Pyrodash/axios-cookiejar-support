'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

let noop = function(axios) {
  return axios;
}

if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  noop = require('./dist/index').wrapper
}

exports.wrapper = noop;
