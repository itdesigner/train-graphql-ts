import * as express from 'express';
import * as body_parser from 'body-parser';
import * as expressGraphQL from 'express-graphql';
import {postsSchema} from '../reddit-graphql-lib/schemas/schema';

export const application = express();
application.use(body_parser.json({limit: '50mb' }));
application.use(
    '/',
    expressGraphQL( () => {
        return {
            graphiql:true,
            schema: postsSchema,
        }
    })
);
