const fs = require('fs')
require("dotenv").config();
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const AWS_KEY_PUBLIC = process.env.AWS_KEY_PUBLIC;
const AWS_KEY_SECRET = process.env.AWS_KEY_SECRET;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;

const s3 = new S3Client({
    region: AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: AWS_KEY_PUBLIC,
        secretAccessKey: AWS_KEY_SECRET
    }
});
const uploadFile = async (file) => {
    try {
        const stream = fs.createReadStream(file.tempFilePath);
        const uploadParams = {
            Bucket: AWS_BUCKET_NAME,
            Key: file.name,
            Body: stream,
        }
        const command = new PutObjectCommand(uploadParams);
        return await s3.send(command);
    } catch (error) {
        console.log(error);
    }
}

const readFile = async (fileName="") => {
    try {
        const commandGet = new GetObjectCommand({
            Bucket: AWS_BUCKET_NAME,
            Key: fileName,
        });

        const result = await s3.send(commandGet);
        result.Body.pipe(fs.createWriteStream('./images/newImage.png'))

    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    AWS_BUCKET_NAME,
    AWS_BUCKET_REGION,
    AWS_KEY_PUBLIC,
    AWS_KEY_SECRET,
    uploadFile,
    readFile
}