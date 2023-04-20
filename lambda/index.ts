import * as AWS from 'aws-sdk';

const sns = new AWS.SNS();

export const handler = async (event: { body: string; }) => {
  try {
    const body = JSON.parse(event.body);
    const params = {
      Message: body.email,
      TopicArn: process.env.TOPIC_ARN
    };
    await sns.publish(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify('Email published to SNS topic')
    };
  } catch (error) {
    console.error(error);
    throw new Error('Error publishing email to SNS topic');
  }
};