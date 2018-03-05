const app = require('express').Router();

// Routes
// console.log("we are in the cards route");

/* GET home page. */
app.get('/', function(req, res, next) {
  response.send('The slash route is working, so you better start working.');
});

console.log("before knex select in cards");
// var stuff = "";

app.get('/', (request, response) => {
   knex.select('id', 'cardname', 'card_image_url').from('cards')
.then( rows => {
  console.log( rows );
  return response.json( rows );
});
});

app.get('/cards', (request, response) => {
   knex.select('id', 'cardname', 'card_image_url').from('cards')
.then( rows => {
  console.log( rows );
  return response.json( rows );
});
});
// */

// console.log(stuff);

console.log("after knex select in cards");

module.exports = app;
