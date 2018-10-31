# s3-read-file-stream

[![npm](https://img.shields.io/npm/v/s3-read-file-stream.svg)]() [![npm](https://img.shields.io/npm/l/s3-read-file-stream.svg)]()

Reads a file from S3 via stream using AWS SDK and prints its content to stdout, or to another writable stream. CLI ready + support to gzip. Useful to quickly inspect large files without the need to download it entirely.

## Goals

 * Support to **gzip**
 * **CLI** ready

## Usage

Using it as a module or via CLI, **gzip** is supported for the **s3Path**. The **.gz** extension is all that is needed to determine when the input must be decompressed and if the output should be compressed. If there is no *.gz* extension it will be handled as a text file (*UTF-8*).

S3 protocol is accepted as well (e.g. **s3:**//bucket-name/path/to/file.gz).

### CLI

#### via NPX

```bash
    $ npx s3-read-file-stream --s3Path="https://s3.amazonaws.com/bucket-name/path/to/file.gz"
```

#### As a global module

**install:**
```bash
    $ npm install -g s3-read-file-stream
```

**and use it:**
```bash
    $ s3-read-file-stream --s3Path="https://s3.amazonaws.com/bucket-name/path/to/file.gz"
```

### Node.js module


**install:**
```bash
    $ npm install s3-read-file-stream
```

```javascript
const s3ReadFileStream = require('../');

s3ReadFileStream("https://s3.amazonaws.com/bucket-name/path/to/file.gz");
```

Another writable stream can be set as a destination, to be used instead of **stdout**:

```javascript
const s3ReadFileStream = require('../');
const fs = require('fs');

s3ReadFileStream("https://s3.amazonaws.com/bucket-name/path/to/file.gz", fs.createWriteStream('./file.txt'));
```
