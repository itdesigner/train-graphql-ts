module.exports = {
    "query": "query($subreddit:String) { typescript:posts(subreddit:$subreddit) { ...defaultFields } } fragment defaultFields on Post { id heading:title ups downs } {\"subreddit\":\"lock-picks\"}",
    "variables": "{ \"subreddit\":\"lock-picking\"}"
}