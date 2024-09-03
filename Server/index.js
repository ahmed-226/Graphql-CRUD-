equire('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const colors = require('colors');
const connectDB = require('./config/db.js');

const app = express();
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});