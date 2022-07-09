const { ApolloServer, gql } = require('apollo-server');
const path = require('path');
const fs = require('fs');
const resolvers = require('./resolvers');

const schemaData = fs.readFileSync(path.join(__dirname, 'schema.graphql'), {
  encoding: 'utf8',
});
const typeDefs = gql(schemaData);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
