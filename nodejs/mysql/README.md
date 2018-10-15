
让nodejs安装mysql模块进行数据库相关操作

```shell
[root@zhangyz test]# npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (test) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /root/test/package.json:

{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) 
```

先初始化安装目录随后安装mysql模块

```shell
[root@zhangyz test]# npm install mysql 
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN test@1.0.0 No description
npm WARN test@1.0.0 No repository field.

+ mysql@2.16.0
added 11 packages from 15 contributors and audited 13 packages in 3.652s
found 0 vulnerabilities
[root@zhangyz test]# ls 
node_modules  package.json  package-lock.json
```

代码分布如下:

```
config.js
dbconnection.js
main.js
```

config.js当中存放数据库的配置信息

```javascript
module.exports = {
    test: {
        host: '192.168.1.1',
        user: 'root',
        password: 'root',
        database: 'test',
        port: 3306
    }
};
```

dbconnection.js当中定义对数据库的操作例如(增, 删, 改, 查)

```javascript
var mysql = require("mysql");
var config = require("./config.js");
var pool = mysql.createPool(config.test);

var queryres = {
    selectRes: function(sql, sqlParam, callback){
        pool.getConnection(function(err, conn){
            var result = new Object();
            if(err){
                result.success = 0;
                result.message = err.message;
                console.log('select error:' + err.message);
            }else{
                conn.query(sql, sqlParam, function(qerr, rows){
                    conn.release();
                    if(qerr){
                        result.success = 0;
                        result.message = qerr.message;
                        console.log('select error:' + qerr.message);
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
    }
};

module.exports = queryres;
```

