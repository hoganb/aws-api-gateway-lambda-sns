# aws-api-gateway-lambda-sns
Designed and implemented a serverless application using AWS CDK, Lambda, API Gateway, and SNS to create an API endpoint that publishes email addresses to an SNS topic and sends a confirmation email to a specified email address.

# Project
The project is a serverless solution built on AWS using various AWS services. It involves creating an API Gateway endpoint that triggers a Lambda function to publish email addresses to an SNS topic.

The SNS topic has a subscription that sends an email to a specified email address whenever a new email address is published to the topic.

The project is implemented using AWS CDK with TypeScript, which allows for the creation and management of the necessary AWS resources in a programmatic and scalable manner. The project leverages various AWS services including API Gateway, Lambda, SNS, and SES for email delivery.

# Technologies
This project uses several AWS services and technologies, including:

- **AWS API Gateway**: to create a RESTful API endpoint for receiving email addresses.
- **AWS Lambda**: to run the code that publishes the email address to the SNS topic.
- **AWS SNS**: to create a topic that receives the email address and sends it to a subscribed email address.
- **AWS SES**: to send email messages to the subscribed email address.
- **AWS CDK with TypeScript**: to define and manage the AWS resources in a programmatic and scalable manner.

These AWS services and technologies are used together to create a serverless solution that enables the publishing of email addresses to an SNS topic via an API Gateway endpoint, and the subsequent delivery of an email message to a subscribed email address.

# Skills
The skills required and learned in this project include:

- **AWS Services**: A good understanding of the AWS ecosystem and how to use various AWS services, including API Gateway, Lambda, SNS, and SES, to build a serverless solution.

- **Programming Languages**: The ability to program in a language supported by AWS Lambda, such as Node.js, Python, Java, or C#, and to understand how to write and deploy Lambda functions.

- **AWS CDK with TypeScript**: An understanding of how to use AWS CDK with TypeScript to define and manage AWS resources as code, and to deploy and update AWS infrastructure in a scalable and repeatable manner.

- **API Design**: The ability to design and implement a RESTful API using AWS API Gateway, including handling HTTP requests and responses.

- **Cloud Security**: An understanding of how to secure the AWS resources used in the project, including securing API Gateway, Lambda, and SNS, and managing AWS IAM roles and policies.

Overall, this project provides an opportunity to gain hands-on experience with several key AWS services and technologies, as well as to develop skills in cloud development, API design, and cloud security.

# Testing
Once the project is deployed, you can test it by invoking the API Gateway endpoint with an email as input. Here are the steps to test the project:

1. Go to the API Gateway service in the AWS Console and find the endpoint URL for the API you just deployed.
2. Copy the endpoint URL.
3. Open a tool such as Postman or cURL to make a POST request to the API Gateway endpoint with an email in the request body.
4. Check the SNS topic to ensure that the email was published to the topic.
5. Check the email address specified in the SNS topic subscription to ensure that the email was sent to the address.

If everything worked correctly, you should receive the email at the specified address.