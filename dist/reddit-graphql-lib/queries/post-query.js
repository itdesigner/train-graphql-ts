"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
/// <reference path="../../../../definitions/graphql.d.ts" />
const post_1 = require("../types/post");
const post_resolver_1 = require("../resolvers/post-resolver");
function postsQuery() {
    return {
        type: new graphql_1.GraphQLList(post_1.PostType),
        description: 'This will return all the posts we find in the given subreddit.',
        args: {
            subreddit: {
                type: graphql_1.GraphQLString,
                description: 'Please enter a subreddit name.',
            }
        },
        resolve(parent, args, context, info) {
            let resolver = new post_resolver_1.PostsResolver();
            return resolver.getPosts(args);
        }
    };
}
exports.postsQuery = postsQuery;
//# sourceMappingURL=post-query.js.map