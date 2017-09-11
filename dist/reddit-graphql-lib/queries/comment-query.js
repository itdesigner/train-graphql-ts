"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
/// <reference path="../../../../definitions/graphql.d.ts" />
const comment_type_1 = require("../types/comment-type");
const comment_resolver_1 = require("../resolvers/comment-resolver");
function commentsQuery() {
    return {
        type: new graphql_1.GraphQLList(comment_type_1.CommentType),
        description: 'This will return all the comments we find in the given post.',
        args: {
            subreddit: {
                type: graphql_1.GraphQLString,
                description: 'Please enter a post id.',
            }
        },
        resolve(parent, args, context, info) {
            let resolver = new comment_resolver_1.CommentsResolver();
            return resolver.getComments(args);
        }
    };
}
exports.commentsQuery = commentsQuery;
//# sourceMappingURL=comment-query.js.map