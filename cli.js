#!/usr/bin/env node
// @flow
'use strict';
const cli = require('./dist/cli');

cli(process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exit(1);
});
