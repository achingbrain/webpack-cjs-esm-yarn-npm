# webpack esm/cjs repro

Imports fail when dependencies are install with yarn though they work with npm.

## Usage

1. First try npm:

```console
$ npm install
$ npm run build

... no errors
```

2. Remove deps/lockfiles

```console
$ rm -rf node_modules package-lock.json yarn.lock
```

3. Try yarn:

```console
$ yarn
$ yarn run start

... some output

ERROR in ./node_modules/ipfs-unixfs-importer/esm/src/chunker/rabin.js 39:18-24
export 'create' (imported as 'create') was not found in 'rabin-wasm' (possible exports: __esModule, importer)
 @ ./node_modules/ipfs-unixfs-importer/esm/src/dag-builder/index.js 4:0-40 44:18-23
 @ ./node_modules/ipfs-unixfs-importer/esm/src/index.js 3:0-50 11:17-29
 @ ./node_modules/ipfs-core/src/components/add-all/index.js 3:21-52
 @ ./node_modules/ipfs-core/src/components/root.js 4:24-44
 @ ./node_modules/ipfs-core/src/components/index.js 30:16-33
 @ ./node_modules/ipfs-core/src/index.js 10:19-42
 @ ./node_modules/ipfs/src/index.js 7:22-42
 @ ./src/index.ts 12:15-30

 ... lots more errors
```
