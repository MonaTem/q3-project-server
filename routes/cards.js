const app = require('express').Router();

// Routes
// console.log("we are in the cards route");

/* GET home page. */
app.get('/', function(req, res, next) {
  response.send('The slash route is working, so you better start working.');
});

app.get('/Cards', (request, response) => {
   knex.select('cardname', 'card_image_url').from('cards')
  .then(rows => response.json(cards))
  .then(console.log(response.json(cards)));
});

// console.log(rows);

module.exports = app;
