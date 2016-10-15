const http = require('http');

const firstserver = http.createServer(function (req, res){
     if (req.url ==='/hello') {
     	 res.writeHead(200, {'Content-Type' : 'text/plain'});
     	 res.end ('Hello Everybody');
     }

     if (req.url === '/cs') {
     	res.writeHead(200, {'Content-Type' : 'text/plain'});
     	res.end('cs is the best');
     }

     if (req.url === '/more') {
     	res.writeHead(200, {'Content-Type' : 'text/plain'});
     	res.end('want more, do more');
     }


     if (req.url === '/best') {
     	res.writeHead(200, {'Content-Type' : 'text/plain'});
     	res.end('yeeeaaaaah');
	 }


      if (req.url === '/test') {
	 res.writeHead(404, {'Content-Type' : 'text/plain'});
	 res.end('Look at Network');
	 }

	 res.writeHead(404, {'Content-Type' : 'text/plain'});
	 res.end("Do your best");
 
});

			firstserver.listen(3002);
			