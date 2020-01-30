const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
const port = 4444;

app.use('/graphql', graphqlHTTP({
  schema
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});