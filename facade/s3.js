const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');

const S3 = (bucketName, region) => {

    const s3Client = new S3Client({ region: region });

    const getObject = async (objectKey) => {
        const object = await s3Client.send(new GetObjectCommand({
            Bucket: bucketName,
            Key: objectKey
        }))
        return object;
    }

    const writeObject = async (objectKey, contents) => {

        const response = new Upload({
            client: s3Client,
            params: {
                Bucket: bucketName,
                Key: objectKey,
                Body: contents,
                ContentType: 'image/png',
            }
        })
        return await response.done();
    }

    return {
        getObject,
        writeObject
    }
}

module.exports = S3;