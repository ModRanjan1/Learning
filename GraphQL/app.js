const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./schema.js')

const app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    // rootValue: root,
    graphiql: true,
  })
)
app.get('/book')
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
