import {GraphQLObjectType, GraphQLSchema} from 'graphql';
/// <reference path="../../../../sefinitions/graphql.d.ts" />

import * as PostsQuery from '../queries/post-query';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'This is the default root query for the Reddit API',
    fields: {
        posts: PostsQuery.postsQuery(),
    },
});


export const postsSchema = new GraphQLSchema({
    query: RootQuery
});