import {GraphQLList, GraphQLString, GraphQLNonNull} from 'graphql';
/// <reference path="../../../../definitions/graphql.d.ts" />

import {PostType} from '../types/post';
import {PostsResolver} from '../resolvers/post-resolver';


export function postsQuery():any {
    return {
        type: new GraphQLList(PostType),
        description: 'This will return all the posts we find in the given subreddit.',
        args: {
            subreddit: {
                type: GraphQLString,
                description: 'Please enter a subreddit name.',
            }
        },
        resolve(parent:any, args:any, context:any, info:any) {
            let resolver:PostsResolver = new PostsResolver();
            return resolver.getPosts(args);
        }
    }
}
