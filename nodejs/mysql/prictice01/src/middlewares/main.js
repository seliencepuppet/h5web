var sqlmap = require('./sql.js');
var querys = require('./dbconnection.js');
var config = require('./config.js');
module.exports.createServer = createServer;

function createServer(){
	// 查询所有数据
	var selectAllUser = sqlmap.selectAllUser;
	var datas01 = [];
	querys.selectRes(selectAllUser, datas01, function(result){
		if(result.success == 1){
			console.log(result.dbres.length);	
		}
	});

	// 查询一条数据
	var selectUser = sqlmap.selectUser;
	var unique_code = '12345';
	var datas02 = [unique_code];
	querys.selectRes(selectUser, datas02, function(result){
		console.log(result);	
	});
}
