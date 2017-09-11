import {graphql} from 'graphql';
import {postsSchema} from '../reddit-graphql-lib/schemas/schema';
/// <reference path="../../../definitions/aws-contracts.d.ts" />

exports.handler = function(event:any, context:AwsLambda.Context, callback:any) {
  console.log('Received event');

  const query = event.query;
  return graphql(postsSchema, event.query)
    .then((response) => {
      callback(null, response)
    })
    .catch((err) => {
        callback(err)
    });
}