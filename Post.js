const comment_1 = require('./Comment')

class Post{
    constructor(){
        this.comment= []
    }

    addComment(){
        this.comment.push(Comment)
    }
}

module.export = Post