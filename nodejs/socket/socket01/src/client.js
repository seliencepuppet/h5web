var io = require('socket.io-client');
var socket = io.connect('10.203.11.250:20000');
socket.emit('message');
socket.on('pushToWebClient', function(msg){
	console.log(msg);	
});
