
通常做node项目时，可能会碰到做一个简单的邮件反馈，那这里有一个叫做nodemailer的模块可以用来发送邮件

首先, 是nodemailer模块的安装方法

```shell
[root@zhangyz ~]# mkdir nodemailer01
[root@zhangyz ~]# cd nodemailer01/
[root@zhangyz nodemailer01]# ls
[root@zhangyz nodemailer01]# clear
[root@zhangyz nodemailer01]# /usr/local/node-v8.9.2/bin/npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodemailer01) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /root/nodemailer01/package.json:

{
  "name": "nodemailer01",
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
[root@zhangyz nodemailer01]# 
[root@zhangyz nodemailer01]# clear
[root@zhangyz nodemailer01]# /usr/local/node-v8.9.2/bin/npm install nodemailer --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN nodemailer01@1.0.0 No description
npm WARN nodemailer01@1.0.0 No repository field.

+ nodemailer@4.6.8
added 1 package from 1 contributor and audited 1 package in 2.279s
found 0 vulnerabilities
```

nodemailer模块的支持如下:

* 使用Unicode编码
* 支持Windows系统，不需要安装依赖
* 支持纯文本和HTML格式
* 支持发送附件(包括大型附件)
* 在HTML中嵌入图片
* 支持SSL/STARTTLS安全协议
* 不同的传输方法，可以使用内置也可以使用外部插件的形式
* 提供自定义插件支持(比如增加DKIM签名，使用markdown代替HTML等等)
* 支持XOAUTH2登录验证(以及关于更新的令牌反馈)

