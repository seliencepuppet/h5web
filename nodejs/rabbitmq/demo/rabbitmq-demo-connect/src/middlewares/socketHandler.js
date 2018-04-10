var RMQconn = require('./rabbitmq.js');
var amqp = require('amqp');
var langconfig = require('./langconfig.js');
var config = require('./config.js')


module.exports.createServer = createServer;

function createServer(){
	var connection = amqp.createConnection(config.RabbitMQConfig);
	connection.on('error', function(e){
		console.log('error from amqp: ', e);
	});
	connection.on('close', function(){
		console.log("disconnect from server");
	});
	connection.on('ready', function(){
		var exchangeName = langconfig.RabbitMQUseInfo.SendExchange;
		sendex = connection.exchange(exchangeName, {'type':'direct','durable':true,'autoDelete':false});
	});

	RMQconn.recv(function(message){
		var datas = message.data.toString();
    	console.log(datas);

		var aa = 'hello world!';
		RMQconn.SendInfo(sendex, aa);
	});
}
