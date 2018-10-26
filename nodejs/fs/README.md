
```shell
[root@zhangyz ~]# mkdir fs01
[root@zhangyz ~]# cd fs01/
[root@zhangyz fs01]# /usr/local/node-v8.9.2/bin/npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (fs01) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /root/fs01/package.json:

{
  "name": "fs01",
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
[root@hxt-hongkong fs01]# /usr/local/node-v8.9.2/bin/npm install fs --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN fs01@1.0.0 No description
npm WARN fs01@1.0.0 No repository field.

+ fs@0.0.1-security
added 1 package and audited 1 package in 1.802s
found 0 vulnerabilities

[root@zhangyz fs01]# 
[root@zhangyz fs01]# ls
node_modules  package.json  package-lock.json
```

