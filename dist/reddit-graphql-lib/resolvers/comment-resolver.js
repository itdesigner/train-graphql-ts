"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommentsResolver {
    getComments(args) {
        let _comments = [
            {
                id: 123,
                author: 'bob',
                comment: 'bobs comment'
            },
            {
                id: 124,
                author: 'steve',
                comment: 'steves comment'
            },
            {
                id: 125,
                author: 'mark',
                comment: 'marks comment'
            }
        ];
        return _comments;
    }
}
exports.CommentsResolver = CommentsResolver;
//# sourceMappingURL=comment-resolver.js.map