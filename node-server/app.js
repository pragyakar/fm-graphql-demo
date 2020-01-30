const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
const port = 4444;
const db_source = process.env.DB_AUTH_SOURCE;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(db_source);
});