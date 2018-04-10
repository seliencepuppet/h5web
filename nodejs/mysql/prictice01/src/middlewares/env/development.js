module.exports = {
	hia:{
		host: '10.203.11.234',
	  	user: 'hia',
	  	password: 'SubVersion1234567890',
	  	database: 'hia',
	  	port: 3306
	},
	RabbitMQConfig:{
		host: '10.203.11.234',
	  	port: 5672,
	  	login: 'hitrader',
	  	password: 'hitrader123', 
	  	connectionTimeout: 10000,
	  	heartbeat:60
	},
	hib:{
		connectionLimit:5,
		host: '10.203.11.234',
		user: 'hia',
		password: 'SubVersion1234567890',
		database: 'hib',
		port: 3306
	}
}
