<!--
title: 'AWS NodeJS Example'
description: 'This is a working copy of an image post processor - thumbnail generator'
layout: Doc
framework: v2
platform: AWS
language: nodeJS
runtime: 14.x
priority: 1
-->


# Serverless Framework AWS NodeJS Example

This is a working copy of an image post processor (see branch feature/working). Once deployed, this function will create an 
- S3 bucket with an Event Notification (filter on uploaded/)
- Lambda Function
- A Lambda execution role
- CloudWatch log stream


### Create a serverless application

In order to create an empty serverless application you can either - 
- Use your custom serverless application template
```
serverless create --template-url <some_github_repo> --path <your_new_serverless_app>
```
- Use a standard serverless template
```
serverless
```
This should offer you a bunch of options. For this excercise, choose "AWS - Node.js - Starter"
Now enter an application name eg. "<>-image-post-processor"

*NOTE:* If using a common (organisation) account, prefix the application name with your initials eg "devendra-image-post-processor". This is to avoid any stack namespace clashes.

Say no to login/register to the serverless dashboard
Say no to deploying your project


## Packaging the serverless application
```
serverless package --aws-profile personal --region ap-southeast-2 --stage dev
```

## Deploying the serverless "service"
```
serverless deploy --aws-profile personal --region ap-southeast-2 --stage dev
```

## Invoking the serverless "function"
```
serverless invoke --function postProcessor --aws-profile personal --region ap-southeast-2
```

## Invoking a local serverless "function"
```
serverless invoke local --function postProcessor --aws-profile personal --region ap-southeast-2
```

## Invoking a local serverless "function" with data
```
serverless invoke local --function postProcessor --aws-profile personal --region ap-southeast-2 --path lib/eventData.json
```

## Tailing serverless "function" logs
```
serverless logs -f postProcessor -t --aws-profile personal --region ap-southeast-2
```

## Deploying the serverless "function"
```
serverless deploy function -f postProcessor --aws-profile personal --region ap-southeast-2 --stage dev
```

## Deleting the serverless "function"
```
serverless remove --aws-profile personal --region ap-southeast-2 --stage dev
```

## Setting an AWS Profile on MacOS
```
export AWS_PROFILE=personal
```

## Uploading an image to an S3 bucket
```
aws s3 cp ../../../../Downloads/mug-shot.jpg s3://your-bucket-name-here/uploaded/mug-shot.jpg
```

## Installing a serverless binary MacOS
```
curl -o- -L https://slss.io/install | bash
```

