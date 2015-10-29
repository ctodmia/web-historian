var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var url = require('url');


exports.handleRequest = function (req, res) {
var statusCode = 200;

if( req.method === 'GET'){
fs.readFile(path.join(__dirname, './public/index.html'), function(err, html){
    if (err) throw err;
    var data = '';
    data += html;

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