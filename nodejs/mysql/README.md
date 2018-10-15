
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

