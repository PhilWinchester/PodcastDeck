const fetch = require('node-fetch');

function xmlRequest(req,res,next) {
  console.log(req.body.feedUrl);
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
      res.xmlResp = resp
      next();
    })
    .catch(err => next(err));

}

function readHeader(req,res,next) {
  let splitXML = res.xmlResp.split('\n');
  let xmlHeader = {};
  let counter = 0;

  while (!splitXML[counter].includes('</image>')) {
    counter++;

    if (splitXML[counter].includes('<title>')) {
      xmlHeader['Title'] = splitXML[counter];
    }
    if (splitXML[counter].includes('author')) {
      xmlHeader['Author'] = splitXML[counter];
    }
    if (splitXML[counter].includes('<itunes:summary>')) {
      xmlHeader['Summary'] = splitXML[counter + 1]
    }
    if (splitXML[counter].includes('<itunes:email>')) {
      xmlHeader['Contact'] = splitXML[counter]
    }
  }
  console.log(xmlHeader);
  res.headerData = xmlHeader;
  // console.log(splitXML.slice(0,30));
  next()
}

function splitEpisodes(req,res,next) {
  let splitXML = res.xmlResp.split('<item>');
  let episodeObj = {};
  // console.log(splitXML);
  // let numEpisodes = 0;
  //use this if I need to limit number of responses
  // while ()) {
  //   numEpisodes++;
  // }
  for (let i = 0; i < splitXML.length; i++) {
    let temp = splitXML[i];
    let epHolder = temp.split('\n');
    console.log(epHolder);
    if (splitXML[i].includes('<title>')) {
      console.log('found it...use regex');
    }
  }

  next()
}

module.exports = {
  xmlRequest,
  readHeader,
  splitEpisodes,
}
