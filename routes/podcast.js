const podcast = require('express').Router();
const fetch = require('node-fetch');
const path = require('path');

// This is the route that serves your '/' homepage
podcast.post('/', (req, res) => {
  console.log('hello there');
});

podcast.route('/search')
  .post((req,res,next) => {
    console.log(req.body);
    fetch(`https://itunes.apple.com/search?term=${req.body.podcastTitle}&entity=podcast`, {
      method: 'GET',
      mode: 'no-cors',
      dataType: 'json'
    })
      .then(r => r.json())
      .then(resp => {
        console.log(resp);
        res.json(resp);
        next();
      })
      .catch(err => console.log(err));
  })

module.exports = podcast;
