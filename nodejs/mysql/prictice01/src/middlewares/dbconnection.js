var mysql = require('mysql');
var config = require('./config.js');
var pool = mysql.createPool(config.hia);

var queryres = {
	selectRes: function(sql, sqlParam, callback){
		pool.getConnection(function(err, conn){
			var result = new Object();
			if(err){
				result.success = 0;
				result.message = err.message;
				console.log('select error:'+err.message);	
			}else{
				conn.query(sql, sqlParam, function(qerr, rows){
					conn.release();
					if(qerr){
						result.success = 0;
						result.message = qerr.message;
						console.log('select error:'+qerr.message);	
					}else{
						if(rows.length > 0){
							result['dbres'] = rows;
							result.success = 1;	
						}else{
							console.log('no results');
							result.success = 0;	
						}
					}
					callback(result);
				});	
			}
		});	
	},
	selectOne: function(sql, sqlParam, callback){
		pool.getConnection(function(err,conn){
			var result = new Object();
			if(err){
				result.success = 0;
				result.message = err.message;
				console.log('select error:'+err.message);
			}else{
				conn.query(sql,sqlparam,function(qerr,rows){
					conn.release();
					if(qerr){
						result.success = 0;
						result.message = qerr.message;
						console.log('select error:'+qerr.message);  
					}else{
						if(rows.length > 0){
							result.dbres = rows[0]; 
							result.success = 1;
						}else{
							console.log('no results');
							result.success = 0;
						}
					}
					//事件驱动回调
					callback(result);
				});
			}
		});
	},
	insert: function(sql, sqlParam, callback){
		pool.getConnection(function(err, conn){
			var result = new Object();
			if(err){
				result.success = 0;
				result.message = err.message;
				console.log('select error: ' + err.message);	
			}else{
				conn.query(sql, sqlParam, function(qerr, rows){
					conn.release();
					if(qerr){
						result.success = 0;
						result.message = qerr.message;
						console.log('select error:'+qerr.message);	
					}else{
						if(rows.length > 0){
							result.dbres = rows[0];
							result.success = 1;	
						}else{
							console.log('no results');
							result.success = 0;	
						}
					}
					callback(result);
				});	
			}
		});	
	}	
}

module.exports = queryres;
