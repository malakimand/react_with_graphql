const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cors
app.use(cors());

mongoose.connect('mongodb://root:root123@ds261817.mlab.com:61817/gql-jim');
mongoose.connection.once('open', () => {
	console.log('connected to database');
})


app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('now listening for requests on port 4000');
});