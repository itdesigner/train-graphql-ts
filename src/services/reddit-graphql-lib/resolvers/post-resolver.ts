import * as axios from 'axios';

export class PostsResolver {
	getPosts(args:any):any {
		let URL:string = `https://www.reddit.com/r/${ args.subreddit || 'javascript' }.json`;
		return axios.default.get(URL)
			.then( (response:any) => {
				const __posts:any[] = [];
				const posts = response.data.data.children;

				posts.map( (post:any) => {
					post.data.content = post.data.selftext_html;
					__posts.push( post.data );
				});
				return __posts;
			})
			.catch( (error:any) => {
				return { error: error }
			});
	}
}
