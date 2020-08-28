const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');


module.exports = {
    /* Aca estamos poniento el type Post , y podemos cambiar los campos
    antes de q lo delvuelva por completo en el getPosts o cuando devuelva un 
    tipo Post!, asi que se modificara por aca primero antes de devolver el Post! ,El parent son los Post o todo lo q devuelve el getPosts, te devuelve todos los objectos */
    Post: {
        likeCount(parent) {
            return parent.likes.length;
        },
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }

};