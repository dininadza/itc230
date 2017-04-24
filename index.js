'use strict'

var http = require("http"), fs = require('fs'), qs = require("querystring");
let book = require("/public/book.js");

function serveStatic(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err, data){
      if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      }
      else{
        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
      }
  });
}

http.createServer((req,res) => {
    let url = req.url.split("?");
    let params = qs.parse(url[1]);
    let path = url[0].toLowerCase();
    
    switch(path) {
        case '/':
            serveStatic(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About the project');
            break;
        case '/get':
            let found = book.get(params.title);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            let results = (found) ? JSON.stringify(found) : "Not found";
            res.end('Your results for ' + params.title + "/n" + results);
            break;
        case '/delete':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('delete');
            break; 
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404:Page not found.');
    }
}).listen(process.env.PORT || 3000);
