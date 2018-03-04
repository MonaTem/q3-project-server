const app = require('express').Router();

// Routes
// console.log("we are in the cards route");

/* GET home page. */
app.get('/', function(req, res, next) {
  response.send('The slash route is working, so you better start working.');
});

app.get('/Cards', (request, response) => {
  knex('cards')
  .then( rows => response.json(cards));
});

console.log('at end of cards route');

module.exports = app;
