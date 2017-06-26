var http = require('http');

var PORT = 7000;

var compliment = 'You have all of the potential in the world.';

var putDown = 'Think about what you could be if you actually achieved your potential.';

function handleRequest1(request, response){
	response.end(compliment);
}

function handleRequest2(request, response){
	response.end(putDown);
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT, function(){
	console.log("Server 1 listening on: http://localhost:%s", PORT);
});

var server2 = http.createServer(handleRequest2);

var PORT2 = 7500;

server2.listen(PORT2, function(){
	console.log("Server 2 listening on: http://localhost:%s", PORT2);
});