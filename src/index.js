const { ApolloServer,PubSub } = require('apollo-server');
require("dotenv").config();
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
/* ////////// */
require('./database');/* DATABASE */


const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
});




/* Server Inizializate */
server.listen({ port: process.env.PORT || 5000 })
    .then(res => {
        console.log('Server runing on port', res.port)
    })