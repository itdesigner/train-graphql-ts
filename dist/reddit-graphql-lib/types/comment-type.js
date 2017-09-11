"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
/// <reference path="../../../../efinitions/graphql.d.ts" />
exports.CommentType = new graphql_1.GraphQLObjectType({
    name: 'Comment',
    description: 'Comment Type, for all posts',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLID,
            description: 'The ID of the comment',
        },
        author: {
            type: graphql_1.GraphQLString,
            description: 'The name of the commentor',
        },
        comment: {
            type: graphql_1.GraphQLString,
            description: 'Text of the comment',
        }
    })
});
//# sourceMappingURL=comment-type.js.map