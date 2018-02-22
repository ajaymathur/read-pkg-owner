# read-pkg-owner

> Get the owner of the package by reading package json

## Install

```sh
  $ yarn add read-pkg-owner
```

## Use as CLI

Execute following in the repository you want owner for:

```sh
  $ read-pkg-owner
```

### API

##### `cwd`

**type: string**

**default: process.cwd()**

This is the path to directory where the repository exists.

Example:

```sh
  # to get owner for a repo test which is in dir Users/workspace/test
  $ read-pkg-owner --cwd Users/workspace/test
```

## Use in your node project

This package exports the function `getOwner` which will give you the result

```js
  const readPkgOwner = require('read-pkg-owner');

  readPkgOwner().then(owner => {
    // do stuff with owner name
  });
```

### API

#### `cwd`

**type: string**

**default: process.cwd()**

This is the path to directory where the repository exists.

Example:

```js
  // to get owner for a repo test which is in dir Users/workspace/test
  const readPkgOwner = require('read-pkg-owner');

  readPkgOwner('Users/workspace/test').then(owner => {
    // do stuff with owner name
  });
```


