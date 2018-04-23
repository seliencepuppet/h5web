	由于本人是在centos6上做的实验，重要使用的apache这款大哥级别web服务器的功能

	首先 yum -y install httpd 

	安装完成之后 /etc/init.d/httpd start 对服务进行启动


****

	启动完成之后，所有的准备工作准备完成了，接下来就可以对服务器进行操作啦！
	首先，先介绍一下apache的工作目录：

	默认apache的根目录位于 /var/www/html 下

	vim /etc/httpd/conf/httpd.conf

	92 DocumentRoot "/var/www/html"   # 改目录就是网站的根路径

	402 DirectoryIndex index.html index.html.var	# 这一行注释表示可以设置网页文件的后缀名称以什么来进行访问

	例如：
		DirectoryIndex index.html main.html index.php index.html.var 来做结尾


	设置管理员邮箱：
		268 ServerAdmin root@localhost

	


	如果说以上操作对于建立一个单纯的站点来讲，完全可以满足所有的需求，但是，如果一台服务器上需要部署成多个项目，这就需要我们运维工程师配置虚拟主机了


**首先，编辑配置文件向当中添加虚拟主机**

	

	虚拟主机：

		Listen 8001
		<VirtualHost *:8001>
		    DocumentRoot "/var/www/html/a.com"
		    ServerName www.a.com
		    <Directory "/var/www/html/a.com">
		        Options Indexes FollowSymLinks
		        AllowOverride None
		        Order allow,deny
		        Allow from all
		    </Directory>
		</VirtualHost>
		
		Listen 8002
		<VirtualHost *:8002>
		    DocumentRoot "/var/www/html/b.com"
		    ServerName www.b.com
		    <Directory "/var/www/html/b.com">
		        Options Indexes FollowSymLinks
		        AllowOverride None
		        Order allow,deny
		        Allow from all
		    </Directory>
		</VirtualHost>




		配置完成之后 :wq  保存退出，service httpd restart  重启apache服务器
	
		[root@zhangyz ~]# cd /var/www/html/
		[root@zhangyz html]# ls
		dvd  ks.cfg
		[root@zhangyz html]# ll
		total 8
		drwxr-xr-x 2 root root 4096 Jul 26 05:51 dvd
		-rw-r--r-- 1 root root 1007 Jul 26 05:51 ks.cfg
		[root@zhangyz html]# mkdir a.com
		[root@zhangyz html]# ls
		a.com  dvd  ks.cfg
		[root@zhangyz html]# cd a.com
		[root@zhangyz a.com]# ls
		[root@zhangyz a.com]# echo "Hello a" > index.html
		[root@zhangyz a.com]# vim /etc/httpd/conf/httpd.conf 
		[root@zhangyz a.com]# cd ..
		[root@zhangyz html]# ls
		a.com  dvd  ks.cfg
		[root@zhangyz html]# mkdir b.com
		[root@zhangyz html]# cd b.com
		[root@zhangyz b.com]# echo "Hello b" > index.html
		[root@zhangyz b.com]# service httpd restart
		Stopping httpd:                                            [  OK  ]
		Starting httpd: httpd: apr_sockaddr_info_get() failed for zhangyz
		httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1 for ServerName
		                                                           [  OK  ]


		
		访问： http：//192.168.0.250：8001
![](http://i.imgur.com/qc52joh.png)

****

		访问： http：//192.168.0.250：8002
![](http://i.imgur.com/MC6C40Q.png)






**有关apache反向代理的相关配置**


	

	Listen 8001
	<VirtualHost *:8001>

	    DocumentRoot "/var/www/html/a.com"
	    ServerName www.a.com
	    <Directory "/var/www/html/a.com">
	        Options Indexes FollowSymLinks
	        AllowOverride None
	        Order allow,deny
	        Allow from all
	    </Directory>
	
	    ProxyRequests Off
	    <Proxy *>
	    	Order deny,allow
	    	Allow from all
	    </Proxy>
	
	    ProxyPass / http://192.168.0.250:8002  # 代理到后端的服务器
	    ProxyPassReverse / http://192.168.0.250:8002  # 后端服务器接收并响应
	
	</VirtualHost>
	
	Listen 8002
	<VirtualHost *:8002>
	    DocumentRoot "/var/www/html/b.com"
	    ServerName www.b.com
	    <Directory "/var/www/html/b.com">
	        Options Indexes FollowSymLinks
	        AllowOverride None
	        Order allow,deny
	        Allow from all
	    </Directory>
	</VirtualHost>


	以上配置完成之后 httpd -t && /etc/init.d/httpd restart

	下面的截图代表代理成功





![](http://i.imgur.com/Xt3MNDP.png)


	反向代理成功