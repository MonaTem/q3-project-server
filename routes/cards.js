var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const knex = require('./db')

// Middleware

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

/* GET home page. */
router.get('/', function(req, res, next) {
  response.send('The slash route is working, so you better start working.');
});

router.get('/Cards', (request, response) => {
  knex('cards')
  .then( rows => response.json(cards));
});

module.exports = router;
