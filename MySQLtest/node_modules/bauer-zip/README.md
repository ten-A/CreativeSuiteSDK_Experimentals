node-bauer-zip
================

Zip and unzip files and folders.

## Installation

```
npm install bauer-zip
```

## Usage

```js
var z = require("bauer-zip");

// sync zip
z.zip("/path-to-zip","output-file.zip");

// async zip
z.zip("/path-to-zip","output-file.zip",function(error) {
});

// async unzip
z.unzip("file-to-unzip.zip","/output-path",function(error) {
});

```

## License

MIT
