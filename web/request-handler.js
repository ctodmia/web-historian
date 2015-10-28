var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

//if (req === 'GET'){
  //return statusCode = 200;
  //return index.html
//}

// console.log('this is a request', req);
var statusCode = 200;
if (req === 'GET'){
  res.writeHead(statusCode, {"Content-Type":"text/html"})
  // res.write (index.html)
  res.write('public/index.html');
  res.end(archive.paths.list);
  
}
};
