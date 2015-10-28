var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
// console.log('this is a request', req);
var statusCode = 200;

if( req.method === 'GET'){
  // console.log( "REQUEST-METHOD", req.method );
  fs.readFile('public/index.html', function(err, html){
    if (err){
      res.writeHead(400);
      res.end();
    }
      res.writeHead(statusCode, {'Content-Type': 'text/html'})
      res.write(html);  
      res.end();
  });
}


//   res.writeHead(statusCode, {"Content-Type":"text/html"})
//   // res.write (index.html)
//   res.write('public/index.html');
//   res.end(archive.paths.list);
  
  // console.log(archive.paths.list)
};
