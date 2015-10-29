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
// listen for post = url  
// collect data (url) from input @ index.html
// store data in site.txt 

}else if (req.method === 'POST'){
  var chunk ='';
  
  req.on('data', function(html){
    chunk += html;
  fs.appendFile((path.join(__dirname,'./archives/sites.txt')), chunk, function(err){
     if(err) throw err;
    });
  // res.write(); 
 
  })

  req.on('end', function(){
    res.writeHead(200);
    res.redirect((path.join(__dirname, './public/loading.html')));
  })
}

//end of handleRequest//////////////////////////////////////////////////////////////////
};