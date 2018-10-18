
进行一个express的项目创建

```shell
[root@zhangyz ~]# mkdir express01
[root@zhangyz ~]# cd express01
[root@zhangyz express01]# npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (express01) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /root/express01/package.json:

{
  "name": "express01",
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
[root@zhangyz express01]# npm install express
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN express01@1.0.0 No description
npm WARN express01@1.0.0 No repository field.

+ express@4.16.4
added 48 packages from 36 contributors and audited 121 packages in 1.485s
found 0 vulnerabilities
```

使用以下代码引用express的模块

```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world!');
});

app.listen(30000);
```

现在在浏览器上输入 http://192.168.1.1:30000 就可以看到访问的结果返回了hello world!的内容.

以上代码的意思是：生成一个 express 实例 app，挂载了一个根路由控制器，然后监听 3000 端口并启动程序。运行 node index，打开浏览器访问 localhost:30000 时，页面应显示 hello world!

这是最简单的一个使用 express 的例子，后面会介绍路由及模板的使用。





