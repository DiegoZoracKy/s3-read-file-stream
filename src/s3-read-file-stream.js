'use strict';

const AWS = require('aws-sdk');
const querystring = require('querystring');
const parseS3BucketKey = require('parse-s3-bucket-key');
const zlib = require('zlib');
const path = require('path');

function s3ReadFileStream(s3Path, writableStream = process.stdout) {
    const s3 = new AWS.S3();
    const unescapedS3path = querystring.unescape(s3Path);
    const { Bucket, Key } = parseS3BucketKey(unescapedS3path);

    let pipeline = s3.getObject({ Bucket, Key }).createReadStream();

    if ('.gz' === path.extname(Key).toLocaleLowerCase()) {
        pipeline = pipeline.pipe(zlib.createGunzip());
    }

    pipeline.pipe(writableStream);
}

module.exports = s3ReadFileStream;