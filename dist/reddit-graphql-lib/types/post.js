"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
/// <reference path="../../../../definitions/graphql.d.ts" />
exports.PostType = new graphql_1.GraphQLObjectType({
    name: 'Post',
    description: 'Post Type, For all the posts present in Reddit.',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLID,
            description: 'ID of the post',
        },
        title: {
            type: graphql_1.GraphQLString,
            description: 'Title of the post',
        },
        url: {
            type: graphql_1.GraphQLString,
            description: 'URL of the post',
        },
        author: {
            type: graphql_1.GraphQLString,
            description: 'Name of the Author who created this post',
        },
        ups: {
            type: graphql_1.GraphQLInt,
            description: 'Total number of Upvotes received for this post',
        },
        downs: {
            type: graphql_1.GraphQLString,
            description: 'Total number of Downvotes received for this post',
        },
        content: {
            type: graphql_1.GraphQLString,
            description: 'Markdown content of the post',
        },
    })
});
//# sourceMappingURL=post.js.map