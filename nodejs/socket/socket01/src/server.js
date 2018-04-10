var app = require('http').createServer().listen('20000');
var io = require('socket.io').listen(app);
var fs = require('fs');
var rabbitMQ = require('amqp').createConnection({ host: '10.203.11.234', port: '5672', login: 'hitrader', password: 'hitrader123'});

function trim(s) {
	return s.replace(/(^\s*)|(\s*$)/g, "");
}

var conns = {};

io.sockets.on('connection', function (socket) {
	socket.on('message', function () {
		console.log('io connection!');
	});

	socket.on('disconnect',function() {
		console.log('io disconnection!');
	});
});

rabbitMQ.on('ready', function() {
	rabbitMQ.queue('Queue111113', { autoDelete: false, durable: true, exclusive: false }, function(queue) {
		queue.bind('zhenshiceshi','111113');
		console.log('Queue ' + queue.name + ' is open!');
		queue.subscribe(function (message) {
			if (message.data) {
				io.sockets.emit('pushToWebClient', message.data.toString());
			}
		});

		io.sockets.on('connection', function (socket) { 
			console.log('io connection!');
		});
	});
});
