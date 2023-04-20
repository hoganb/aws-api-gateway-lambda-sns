import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { Duration } from 'aws-cdk-lib';

export class AwsApiGatewayLambdaSnsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create SNS topic
    const newEmailTopic = new sns.Topic(this, 'NewEmailTopic');

    // Add email subscription to the topic
    newEmailTopic.addSubscription(new subs.EmailSubscription('sweeetata@gmail.com'));

    // Create Lambda function to publish email to SNS topic
    const emailPublisher = new lambda.Function(this, 'EmailPublisher', {
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: Duration.seconds(5),
      environment: {
        TOPIC_ARN: newEmailTopic.topicArn,
      },
    });

    // Grant permission to Lambda function to publish to the SNS topic
    newEmailTopic.grantPublish(emailPublisher);

    // Create the API Gateway HTTP API
    const api = new HttpApi(this, 'EmailPublisherApi');

    // Add route to publish email to SNS topic
    api.addRoutes({
      path: '/email',
      methods: [ HttpMethod.POST ],
      integration: new HttpLambdaIntegration('EmailPublisherApiLambdaProxyIntegration', emailPublisher),
    });
  }
}