const podcast = require('express').Router();
const fetch = require('node-fetch');
const path = require('path');
const FeedParser = require('../lib/feedParser');

// This is the route that serves your '/' homepage
podcast.get('/', (req, res) => {
  res.json({hello : 'world'});
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
        // console.log('First Response: ', resp.results[0].collectionName);
        // resp.results.forEach((elem, counter) => {
        //   console.log(`${counter + 1}: ${elem.collectionName}`);
        // })
        res.json(resp);
        next();
      })
      .catch(err => next(err));
  })

podcast.route('/parse')
  .post(FeedParser.parseFeed, (req,res) => {
    console.log(res.feedContent);
    res.json(res.feedContent)

  })

module.exports = podcast;
