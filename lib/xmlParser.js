const fetch = require('node-fetch');

function xmlRequest(req,res,next) {
  fetch(req.body.feedUrl, {
    headers: {
      'Content-Type': 'text/xml; charset=UTF-8'
    },
    method: 'GET',
    dataType: 'xml'
  })
    .then(r => r.text())
    .then(resp => {
      // console.log(resp);
      res.xmlResp = resp;
      next()
    })
    .catch(err => next(err));

}

function splitItems(req,res,next) {
  let rawXML = res.xmlResp;
  if (typeof rawXML === 'string') {
    console.log(rawXML.slice(0,6000));
  }
}

function readTags(req,res,next) {
  console.log('holder');
}

module.exports = {
  xmlRequest,
  splitItems,
  readTags
}
