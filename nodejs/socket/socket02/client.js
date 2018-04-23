var net = require('net');

var client = net.connect('4567', 'localhost', function(){
	console.log('与服务器端建立连接');	
    client.write('yeah!\r\n');
});

client.on('data', function(data){
	console.log(data.toString());
});

client.on('end', function(){
    console.log('客户端连接中断');	
});
