//Converting xml file into JSON file and passing it through as a javascript object notation to be able to minipulate data easier 

const convert = require('xml-js');
const xml = require('fs').readFileSync('./flighdata_A.xml', 'utf8');

const result = convert.xml2json(xml, {compact: true, spaces: 4});
const jsonResult = JSON.parse(result)
use travel_hub;

db.dropDatabase();

db.flights.insertMany(jsonResult.flights.flight)



