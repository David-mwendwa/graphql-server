const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

// Allow cross-origin requests
app.use(cors());

mongoose
  .connect('mongodb://localhost/graphql-data')
  .then(() => console.log('connected to mongoDB...'))
  .catch((err) => console.error('could not connect mongoDB...', err));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})); 

app.listen(4000, () => console.log(`Listening on port 4000...`))