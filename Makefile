.DEFAULT_GOAL := help

deploy-fn:
	serverless deploy function -f postProcessor --aws-profile personal --region ap-southeast-2 --stage dev

deploy-svc:
	serverless deploy --aws-profile personal --region ap-southeast-2 --stage dev

package:
	serverless package --aws-profile personal --region ap-southeast-2 --stage dev

delete-svc:
	serverless remove --aws-profile personal --region ap-southeast-2 --stage dev

upload-img:
	aws s3 cp ../../../../Downloads/9.jpg s3://dev-customer-image-985383737087-ap-southeast-2/uploaded/10.jpg

install-sharp-linux:
	npm install --platform=linux --arch=x64 --save sharp

invoke:
	serverless invoke --function postProcessor --aws-profile personal --region ap-southeast-2

invoke-local:
	serverless invoke local --function postProcessor --aws-profile personal --region ap-southeast-2

invoke-local-with-data:
	serverless invoke local --function postProcessor --aws-profile personal --region ap-southeast-2 --path lib/eventData.json

tail:
	serverless logs -f postProcessor -t --aws-profile personal --region ap-southeast-2