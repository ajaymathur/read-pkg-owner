// @flow
'use strict';
const readPkg = require('read-pkg');

async function getOwnerFromSlug(slug /*: string */) {
  console.log(slug.match(/(.*):(.*)\/(.*)/));
}

async function getOwner(
  cwd /*: string*/ = process.cwd(),
  { logDetails } = { logDetails: false } /*: { logDetails: boolean }*/
) {
  const { repository } = await readPkg(cwd);
  let owner;

  if (!repository) throw new Error(`Repository details not found in package json at ${cwd}`);

  const repoSlug = repository.url.split('/');
  // second last value in array in owner name
  owner = repoSlug[repoSlug.length - 2];

  if (logDetails) console.log(owner);

  return owner;
}

module.exports = getOwner;
