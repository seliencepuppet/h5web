Node.js 连接rabbitmq中间件接收消息

```javascript
var amqp = require('amqp');
```

以下是使用nodejs代码发送消息给rabbitmq中间件

```javascript
var amqp = require("amqp");
var fs = require("fs");
var exchName = "ExCeshi.Dir"; //exhange 名称
var routeKey = "test"; // 路由键
var message = fs.readFileSync('2.txt').toString('utf-8');

//连接rabbitmq
var conn = amqp.createConnection({
    host: '192.168.1.1', 
    port: 5672, 
    login: 'guest', 
    password: 'guest', 
    authMechanism: 'AMQPLAIN', 
    vhost: '/', 
    ssl: {
        enabled : false
    }   
}); 

var exchangeType = { 
    type: 'direct', 
    durable: true, 
    autoDelete: false, 
    confirm: false 
};

//rabbitmq连接并发送消息
var n = 100;
conn.on('ready',function(){
    conn.exchange(exchName, exchangeType, function(exchange){
        now = new Date();
        mill = now.getMilliseconds();
        console.log(now,mill);
        // 要发送的数据 
        for (var i = 0; i < n; i++) {
            exchange.publish(routeKey,new Buffer(message),''); //发布消息
        }   
        now = new Date();
        mill = now.getMilliseconds();
        console.log(now,mill);
        
        conn.end();
        conn.destroy();
    }); 
}); 
```


rabbitmq连接并接收消息

```javascript
var rabbitMQ = require('amqp').createConnection({ 
    host: '192.168.1.1', 
    port: '5672', 
    login: 'guest', 
    password: 'guest'
});

var queueType = { 
    autoDelete: false, 
    durable: true, 
    exclusive: false 
};

rabbitMQ.on('ready', function() {
    rabbitMQ.queue('queuetest', queueType, function(queue) {
        queue.bind('ExCeshi.Dir','test');
        console.log('Queue ' + queue.name + ' is open!');
        queue.subscribe(function (message) {
            if(message.data){
                var json = eval('(' + message.data.toString() + ')'); 
                console.log(json);  
            }   
        }); 
    }); 
});
```
