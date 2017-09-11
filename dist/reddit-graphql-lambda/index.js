"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema_1 = require("../reddit-graphql-lib/schemas/schema");
/// <reference path="../../../definitions/aws-contracts.d.ts" />
exports.handler = function (event, context, callback) {
    console.log('Received event');
    const query = event.query;
    return graphql_1.graphql(schema_1.postsSchema, event.query)
        .then((response) => {
        callback(null, response);
    })
        .catch((err) => {
        callback(err);
    });
};
//# sourceMappingURL=index.js.map