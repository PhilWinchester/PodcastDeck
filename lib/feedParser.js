let FeedParser = require('feedparser');
let request = require('request'); // for fetching the feed

function parseFeed(req,res,next) {
  let rssReq = request(req.body.feedUrl)
  let feedparser = new FeedParser([req.body.feedUrl]);

  rssReq.on('error', function (error) {
    // handle any request errors
    console.log(error);
  });

  rssReq.on('response', function (resp) {
    let stream = this; // `this` is `req`, which is a stream

    if (resp.statusCode !== 200) {
      this.emit('error', new Error('Bad status code'));
    }
    else {
      stream.pipe(feedparser);
    }
  });

  feedparser.on('error', function (error) {
    // always handle errors
    console.log(error);
  });

  feedparser.on('readable', function () {
    // This is where the action is!
    let stream = this; // `this` is `feedparser`, which is a stream
    let meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
    let item;
    let counter = 0;
    // console.log(meta);
    while (item = stream.read()) {
      // console.log(item);
      // console.log(typeof item);
      // let rssContent = Object.keys(item)
      //   .map((elem) => (
      //     item[elem]
      //   ))

      console.log(item);
      console.log(Object.keys(item).length);
      res.feedContent = item;
    }

    next()
  });
}

module.exports = {
  parseFeed
}
