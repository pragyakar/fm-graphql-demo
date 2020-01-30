const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();
const port = 4444;
const db_source = process.env.DB_AUTH_SOURCE;

mongoose.connect(db_source, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Sucessfully connected to DB');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});