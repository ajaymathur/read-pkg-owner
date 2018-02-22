// @flow
'use strict';

let cli = (() => {
  var _ref = _asyncToGenerator(function* (argv /*: Array<string>*/) {
    const { flags } = meow({ argv });

    yield getOwner(flags.cwd, {
      logDetails: true
    });
  });

  return function cli(_x) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const meow = require('meow');
const getOwner = require('./getOwner');

module.exports = cli;