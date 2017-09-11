"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
/// <reference path="../../../../sefinitions/graphql.d.ts" />
const PostsQuery = require("../queries/post-query");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    description: 'This is the default root query for the Reddit API',
    fields: {
        posts: PostsQuery.postsQuery(),
    },
});
exports.postsSchema = new graphql_1.GraphQLSchema({
    query: RootQuery
});
//# sourceMappingURL=schema.js.map