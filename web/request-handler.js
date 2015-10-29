var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var url = require('url')
// require more modules/folders here!

exports.handleRequest = function (req, res) {
// console.log('this is a request', req);
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
      var data = " ";
      data += html;

      console.log('DATA', data);

      res.end(data);
  });
  
}else if (req.method === 'POST'){
  req.on('data', function(html){
    console.log('this is here');

  })
  req.on('end', function(){
    console.log('this is ended');
  })
}




};