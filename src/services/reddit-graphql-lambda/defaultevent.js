module.exports = {
    "query": "{ typescript:posts(subreddit: \"typescript\") { ...defaultFields } graphql:posts(subreddit:\"graphql\") { ...defaultFields } locks:posts(subreddit:\"lock-picking\") { ...defaultFields } } fragment defaultFields on Post { id heading:title content ups downs }"
}