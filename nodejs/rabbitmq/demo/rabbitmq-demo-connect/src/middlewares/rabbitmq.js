var langconfig = require('./langconfig.js');
var config = require('./config.js')
var amqp = require('amqp');

var RMQconn = {
	recv: function(callback){
		var connection = amqp.createConnection(config.RabbitMQConfig);	
		connection.on('error', function(e){
			console.log('error from amqp: ', e);	
		});
		connection.on('close', function(){
			console.log("disconnect from server");	
		});
		connection.on('ready', function(){
			var queuename = langconfig.RabbitMQUseInfo.RecvQueue;
			var exchangeName = langconfig.RabbitMQUseInfo.RecvExchange;
			connection.queue(queuename, {durable: true, autoDelete: false}, function(queue){
				queue.bind(exchangeName, langconfig.RabbitMQUseInfo.Recvroukey.toString());
				queue.subscribe(function(message){
					callback(message);
				});
			});	
		});
	},
	SendInfo: function(ex, message){
		try{
        	var roukey = langconfig.RabbitMQUseInfo.Sendroukey.toString();
			if(ex.publish(roukey,message)){
				console.log("fa song cheng gong!");
			}else{
				console.log("fa song shi bai!");	
			}
		}catch(e){
			console.log('Error from amqp: ', e);
		}
	}	
}

module.exports = RMQconn;
