//creating MongoDB database 

const express = require('express'); //imports Express.js framework 
const app = express(); //creates instances 
const MongoClient = require('mongodb').MongoClient; //connects mongo client to mongodb 
const createRouter = require('./helpers/create_router.js');//creates router 
const cors = require('cors') //enables cross-origin resource sharing 

app.use(express.json()); //parses requests with JSON file 
app.use(cors())// allows different origin requests 

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true }) // connects to mongoDB 
.then((client) => {
const db = client.db('travel_hub'); //access to db 
const flightCollection = db.collection('flights'); //reference to flights
const flightRouter = createRouter(flightCollection); //using function 
app.use('/api/flights', flightRouter); //handles requests to router path 

})
.catch(console.error); //handles errors 


app.listen(9000, function () {
console.log(`Listening on port ${ this.address().port }`);
}); //logs message if server is listening on port 9000