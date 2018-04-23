var net = require('net');

var server = net.createServer(function(socket){
	console.log('客户端与服务端连接已经建立!');
	// 接收客户端数据,并响应客户端返回数据
	socket.on('data', function(data){
		console.log(data.toString());	
		socket.write("hello");
	});

	socket.on('end', function(){
		console.log("中断连接");	
	})
});

server.listen(4567, '127.0.0.1', function(){
	address = server.address();
	console.log('被监听的地址信息为%j', address);	
});
