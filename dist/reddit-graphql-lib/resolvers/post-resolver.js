"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
class PostsResolver {
    getPosts(args) {
        let URL = `https://www.reddit.com/r/${args.subreddit || 'javascript'}.json`;
        return axios.default.get(URL)
            .then((response) => {
            const __posts = [];
            const posts = response.data.data.children;
            posts.map((post) => {
                post.data.content = post.data.selftext_html;
                __posts.push(post.data);
            });
            return __posts;
        })
            .catch((error) => {
            return { error: error };
        });
    }
}
exports.PostsResolver = PostsResolver;
//# sourceMappingURL=post-resolver.js.map