# nodejs

在linux环境中安装nodejs解释器
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

## nodejs能解决什么问题

Node.js 首要目标: 提供一种简单的,用于创建高性能服务器以及在服务器中运行的各种应用程序的开发工具. 也就是说, Node.js身兼两职: 创建高性能服务器和在服务器中运行的应用程序

创建高性能服务器: Node.js提供了API, 可以直接创建舰艇某一端口的服务器, 有点类似于PHP的 php-fpm. 只不过 php-fpm 作为 php 中的一个单独命令存在的, 用于执行php代码,并返回执行结果. 而 Node.js直接提供了API建立可执行 Javascript 代码的服务器: 

```javascript
http.createServer(... ...).listen(8080);
```

Javascript 语言的一个特点就是只支持单线程. V8 Javascript 脚本语言也是如此, 因此, 并不需要担心 Javascript 会造成死锁现象. 但是与浏览器中运行的 Javascript 不同的是, Node.js 为 V8 Javascript 提供了非阻塞型 I/O 机制. 例如, 当访问数据库时, 在开始访问数据库之后, 到数据库返回结果之前, 存在一段等待时间. 在传统单线程模式中, 这段时间程序会一直等待数据库返回结果, 而在非阻塞 I/O 机制中, 访问数据库后, 程序会立刻返回, 去完成其他工作, 当数据库返回结果后, 又会通过回调函数返回结果, 从而大大提供了程序的执行效率.

#### Node.js 适合开发哪类应用程序




#### 使用 nginx + nodejs 搭建web服务

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
