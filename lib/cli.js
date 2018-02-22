// @flow
'use strict';
const meow = require('meow');
const getOwner = require('./getOwner');

async function cli(argv/*: Array<string>*/) {
  const { flags } = meow({argv});

  await getOwner(flags.cwd, {
    logDetails: true,
  });
  
}

module.exports = cli;
