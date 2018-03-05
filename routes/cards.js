const app = require('express').Router();

// Routes
// console.log("we are in the cards route");

/* GET home page. */
app.get('/', function(req, res, next) {
  response.send('The slash route is working, so you better start working.');
});

console.log("before knex select in cards");
// var stuff = "";

app.get('/cards', (request, response) => {
   knex.select('id', 'cardname', 'card_image_url').from('cards')
   /*.on('query-error', function(error, obj) {
     app.log(error);
     console.log(" the error is " + error);
       })
  // });
   /*.then(function() {
   .catch(function(error) {
   console.log("and the error is..." + error);
    });

  } */
.then( rows => {
  console.log( rows );
  return response.json( rows );
});
  //.then(rows => response.json(rows))
  // .then stuff = cards;
  // .then(console.log(response.json(cards)));
});
// */

// console.log(stuff);

module.exports = app;
