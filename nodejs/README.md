# Node.js

<br>

在linux环境中安装node解释器
```shell
[root@zhangyz ~]# tar -xf node-v0.10.26.tar.gz -C /usr/src
[root@zhangyz ~]# cd /usr/src/node-v0.10.26/
[root@zhangyz node-v0.10.26]#
[root@zhangyz node-v0.10.26]# ./configure --prefix=/usr/local/node-v0.10.26
{ 'target_defaults': { 'cflags': [],
                       'default_configuration': 'Release',
                       'defines': [],
                       'include_dirs': [],
                       'libraries': []},
  'variables': { 'clang': 0,
                 'gcc_version': 44,
                 'host_arch': 'x64',
                 'node_install_npm': 'true',
                 'node_prefix': '/usr/local/node-v0.10.26',
                 'node_shared_cares': 'false',
                 'node_shared_http_parser': 'false',
                 'node_shared_libuv': 'false',
                 'node_shared_openssl': 'false',
                 'node_shared_v8': 'false',
                 'node_shared_zlib': 'false',
                 'node_tag': '',
                 'node_unsafe_optimizations': 0,
                 'node_use_dtrace': 'false',
                 'node_use_etw': 'false',
                 'node_use_openssl': 'true',
                 'node_use_perfctr': 'false',
                 'node_use_systemtap': 'false',
                 'python': '/usr/bin/python',
                 'target_arch': 'x64',
                 'v8_enable_gdbjit': 0,
                 'v8_no_strict_aliasing': 1,
                 'v8_use_snapshot': 'true'}}
creating  ./config.gypi
creating  ./config.mk
[root@zhangyz node-v0.10.26]# make 
[root@zhangyz node-v0.10.26]# make install 
[root@zhangyz node-v0.10.26]# ls /usr/local/node-v0.10.26/
bin  include  lib  share
[root@zhangyz ~]# /usr/local/node-v0.10.26/bin/node --version
v0.10.26
```


<br>

Node.js 是一门快速的开发语言,是目前唯一真正的全栈语言,可以开发服务端,web,微信小程序

* ###### Electron 该框架是用来开发桌面应用程序的

<br>

## Node.js能解决什么问题

Node.js 首要目标: 提供一种简单的,用于创建高性能服务器以及在服务器中运行的各种应用程序的开发工具. 也就是说, Node.js身兼两职: 创建高性能服务器和在服务器中运行的应用程序

创建高性能服务器: Node.js提供了API, 可以直接创建舰艇某一端口的服务器, 有点类似于PHP的 php-fpm. 只不过 php-fpm 作为 php 中的一个单独命令存在的, 用于执行php代码,并返回执行结果. 而 Node.js直接提供了API建立可执行 Javascript 代码的服务器: 

```javascript
http.createServer(... ...).listen(8080);
```

Javascript 语言的一个特点就是只支持单线程. V8 Javascript 脚本语言也是如此, 因此, 并不需要担心 Javascript 会造成死锁现象. 但是与浏览器中运行的 Javascript 不同的是, Node.js 为 V8 Javascript 提供了非阻塞型 I/O 机制. 例如, 当访问数据库时, 在开始访问数据库之后, 到数据库返回结果之前, 存在一段等待时间. 在传统单线程模式中, 这段时间程序会一直等待数据库返回结果, 而在非阻塞 I/O 机制中, 访问数据库后, 程序会立刻返回, 去完成其他工作, 当数据库返回结果后, 又会通过回调函数返回结果, 从而大大提供了程序的执行效率.

#### Node.js 适合开发哪类应用程序




#### 使用 nginx + Node.js 搭建web服务

```nginx
server {
    listen       9999;
    server_name  markdown;
    charset utf-8;
    access_log logs/host_access.log;

    location / {
	root   markdown;
	index  index index.html index.htm index.php index.md default.html default.htm default.php;
    }

    location /app {
	proxy_pass http://127.0.0.1:1234
    }
}

```

## Node.js的劣势和解决方案
* 默认不支持多核, 但用cluster可以解决
* 默认不支持服务器集群, node-http-proxy可以解决
* 使用nginx做负载均衡, 静态的由nginx处理, 动态的由node.js处理
* forever或node-cluster实现灾难恢复

<br>

## Node.js框架选择
* 比较热门的包括: express, koa, Hapi 以及express基础之上的sails
* express: 完善, 稳定, 文档全, 社区大
* koa超前: 正在完善中
* Hapi: 复杂(一个简单的Hello, world都要做很多堆砌), 适合复杂的大型项目


使用node解释器开展一个项目首先要做的第一件事就是在目录里面对其进行初始化操作

```shell
[root@zhangyz test01]# /usr/local/node-v0.10.26/bin/npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (test01) 
version: (0.0.0) 
description: test
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: zhangyz
license: (ISC) 
About to write to /usr/local/nodejs/test03/package.json:

{
  "name": "test01",
  "version": "0.0.0",
  "description": "test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "zhangyz",
  "license": "ISC"
}

Is this ok? (yes) yes
[root@zhangyz test01]# 
[root@zhangyz test01]# 
[root@zhangyz test01]# ls
package.json
[root@zhangyz test01]# 
[root@zhangyz test01]# ll
total 4
-rw-r--r-- 1 root root 213 Oct  8 15:42 package.json
```
