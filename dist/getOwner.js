// @flow
'use strict';

let getOwnerFromSlug = (() => {
  var _ref = _asyncToGenerator(function* (slug /*: string */) {
    console.log(slug.match(/(.*):(.*)\/(.*)/));
  });

  return function getOwnerFromSlug(_x) {
    return _ref.apply(this, arguments);
  };
})();

let getOwner = (() => {
  var _ref2 = _asyncToGenerator(function* (cwd /*: string*/ = process.cwd(), { logDetails } = { logDetails: false /*: { logDetails: boolean }*/
  }) {
    const { repository } = yield readPkg(cwd);
    let owner;

    if (!repository) throw new Error(`Repository details not found in package json at ${cwd}`);

    const repoSlug = repository.url.split('/');
    // second last value in array in owner name
    owner = repoSlug[repoSlug.length - 2];

    if (logDetails) console.log(owner);

    return owner;
  });

  return function getOwner() {
    return _ref2.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const readPkg = require('read-pkg');

module.exports = getOwner;