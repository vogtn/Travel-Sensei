require('dotenv').config();
var express = require('express');
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
})

var router = express.Router();

// /GET, search yelp for destination

router.route('/:cityName/data')
  .get(function(req, res) {
    var location = req.params.cityName;
    
    yelp.search({
      term: 'food',
      location: location,
      limit: 5,           // only 5 results returned
      sort: 2             // 2 = highest rated results
    })
    .then(function(data) {
      var yelpBusinessArr = data.businesses;

      console.log(data);    // returns data as object
      return res.send(yelpBusinessArr);
    })
    .catch(function(err) {
      console.log(err);
      return res.send({message: 'error while searching for ', location})
    });
});
module.exports = router;