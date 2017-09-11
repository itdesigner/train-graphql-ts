"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser = require("body-parser");
const expressGraphQL = require("express-graphql");
const schema_1 = require("../reddit-graphql-lib/schemas/schema");
exports.application = express();
exports.application.use(body_parser.json({ limit: '50mb' }));
exports.application.use('/', expressGraphQL(() => {
    return {
        graphiql: true,
        schema: schema_1.postsSchema,
    };
}));
//# sourceMappingURL=application.js.map