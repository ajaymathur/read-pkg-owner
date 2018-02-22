// @flow
'use strict';

const test = require('ava');
const fixtures = require('fixturez');
const getOwner = require('../lib/getOwner');
const f = fixtures(__dirname);

test('with repository object', async t => {
  const tempDir = f.copy('with-repository-object');
  t.is(await getOwner(tempDir), 'ajaymathur');
});

test('with repository string', async t => {
  const tempDir = f.copy('with-repository-string');
  t.is(await getOwner(tempDir), 'ajaymathur');
});

// Need to figure out this test case
// test('with no repository details', async t => {
//   const tempDir = f.copy('without-repository-details');
//   t.throws(async () => {
//     await getOwner(tempDir);
//   });
// });
