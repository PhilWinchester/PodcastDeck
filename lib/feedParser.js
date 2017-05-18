let FeedParser = require('feedparser');
let request = require('request'); // for fetching the feed

let req = request('http://somefeedurl.xml')
let feedparser = new FeedParser([options]);

req.on('error', function (error) {
  // handle any request errors
});

req.on('response', function (res) {
  let stream = this; // `this` is `req`, which is a stream

  if (res.statusCode !== 200) {
    this.emit('error', new Error('Bad status code'));
  }
  else {
    stream.pipe(feedparser);
  }
});

feedparser.on('error', function (error) {
  console.log(error);
});

feedparser.on('readable', function () {
  // This is where the action is!
  let stream = this; // `this` is `feedparser`, which is a stream
  let meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  let item;

  while (item = stream.read()) {
    console.log(item);
  }
});