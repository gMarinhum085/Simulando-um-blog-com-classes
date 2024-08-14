
const Comment = require('./Comment')
const Author = require('./Author')
const Post = require('./Post')

const author1 = new Author(
    'Jonh Wick',
)

const post1 = new Post(
    'Título do post tal',
    'Conteúdo do post tal',
    author1
)



const comment1 = new Comment(
    'Winston',
    'Que legal!'
)

const comment2 = new Comment(
    'Frankie',
    'Você de novo por aqui.'
)

author1.addPost(post1)
post1.addComment(comment1)
post1.addComment(comment2)
console.log(author1)
console.log(post1)
