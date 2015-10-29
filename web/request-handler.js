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
  

// POST
// listen for post 
// collect data from input @ index.html
// store data in site.txt 

}else if (req.method === 'POST'){
  var chunk ='';
  req.on('data', function(html){
    chunk += html;
    console.log('this is chunk', chunk);

  })
  req.on('end', function(){
    console.log('this is ended');
  })
}

//end of handleRequest//////////////////////////////////////////////////////////////////
};