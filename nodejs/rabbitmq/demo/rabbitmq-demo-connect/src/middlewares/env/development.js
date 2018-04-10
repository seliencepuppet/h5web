module.exports = {
	mongodb:'mongodb://localhost/cms',
	hia:{
		host: 'rdsjd609kh9717yyr01e.mysql.rds.aliyuncs.com',
	  	user: 'hia',
	  	password: 'hia_8858',
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
		host: 'rdsjd609kh9717yyr01e.mysql.rds.aliyuncs.com',
		user: 'hib',
		password: 'hib_8858',
		database: 'hib',
		port: 3306
	}
}
