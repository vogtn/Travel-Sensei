require('dotenv').config();
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
})

yelp.search({
  term: 'food',
  location: 'Japan',
  limit: 5,           // only 5 results returned
  sort: 2             // 2 = highest rated results
})
.then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.log(err);
})