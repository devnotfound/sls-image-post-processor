'use strict';
const bucketName = process.env.CUSTOMER_IMAGE_BUCKET_NAME;
const region = process.env.REGION;
const s3Client = require('./facade/s3')(bucketName, region);
const sharp = require('sharp');
const { PassThrough } = require('stream');

const postProcessor = async (event) => {
  try {
    console.log(`about to fetch s3 object ${event.Records[0].s3.object.key} from bucket ${bucketName} and region ${region} ${JSON.stringify(event)}`);
    const object = await s3Client.getObject(event.Records[0].s3.object.key);
    console.log(`fetched s3 object with content length ${object.ContentLength}`);
    const resizedObjectKey = event.Records[0].s3.object.key.replace('uploaded', 'thumbnails');
    const writeResponse = await s3Client.writeObject(resizedObjectKey, getResizedStream(object));
    console.log(`finished creating a thumbnail object ${writeResponse}`);
    return true;
  } catch(e) {
      console.log(`error occurred while trying to resize object ${e.stack}`);
  }
}

const getResizedStream = (object) => {
  const resizer = sharp().resize(50).png();
  const writeStream = new PassThrough();
  object.Body.pipe(resizer).pipe(writeStream);
  return resizer;
}

module.exports.postProcessor = postProcessor;