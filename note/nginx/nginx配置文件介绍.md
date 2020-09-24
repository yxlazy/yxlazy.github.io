# nginx配置文件组成

1. 全局快

   从配置文件开始到`events` 块之间，主要是设置一些影响 Nginx 服务器整体运行的配置指令。

   * `worker_processes` 并发处理服务的配置，值越大，可以支持的并发处理量越多，但是会受到硬件、软件等设备的制约

2. events 块

   影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 workprocess 下的网络连接进行序列化，是否允许同时接收多个网络连接等等。

   ```nginx
   #支持的最大连接数：
   events {
       worker_connections  1024;
   }
   ```

3. HTTP 块

   在此配置反向代理和负载均衡。

   ```nginx
   location [ = | ~ | ~* | ^~] url {
   
   }
   ```

   * `location` 说明，该语法用来匹配 `url` , 语法如下：
     * **=:** 用于不含正则表达式的 url 前，要求字符串与 url 严格匹配，匹配成功就停止向下搜索并处理请求。
     * **~：**用于表示 url 包含正则表达式，并且区分大小写。
     * **~\*：**用于表示 url 包含正则表达式，并且不区分大小写。
     * **^~：**用于不含正则表达式的 url 前，要求 Nginx 服务器找到表示 url 和字符串匹配度最高的 location 后，立即使用此 location 处理请求，而不再匹配。
     * 如果有 url 包含正则表达式，不需要有 ~ 开头标识。

   ```nginx
   #例如，在浏览器地址栏输出www.example.com，需要跳转到Linux系统本地地址http://127.0.0.1:8080
   
   server {
       listen 80; #监听端口
       server_name www.example.com 192.168.1.123; #绑定访问的域名，也可以是ip地址
       
       location / {
           root html; #服务器响应内容起始目录，一般默认以index.html作为响应起点
           proxy_pass http://127.0.0.1:8080; #代理到本地地址
           index index.html index.htm;#响应起始内容
       }
       location /user/ { #正则匹配
           root html;
           proxy_pass http://127.0.0.1:8000;
           index index.html index.htm;
       }
       location /user {#不是正则，使用的url
           ....
       }
   }
   ```

4. 负载均衡

   ```nginx
   stream {
       upstream myserver {
           server 192.168.1.123:8080;
           #fair; #放在这里
       }
   }
   server {
       listen 80; #监听端口
       server_name www.example.com 192.168.1.123; #绑定访问的域名，也可以是ip地址
       
       location / {
           root html; #服务器响应内容起始目录，一般默认以index.html作为响应起点
           proxy_pass http://myserver; #代理到负载均衡配置的地址
           index index.html index.htm;#响应起始内容
       }
   }
   
   ```

   负载均衡方式如下：

   * 轮询（默认）。
   * weight, 代表权重，权越高优先级越高。
   * fair，按后端服务器的响应时间来分配请求，相应时间短的优先分配。
   * ip_hash, 每个请求按照访问 ip 的 hash 结果分配，这样每一个访客固定的访问一个后端服务器，可以解决 Session 的问题。

5. 动静分离

   什么是动静分离？把动态请求和静态请求分开，不是讲动态页面和静态页面物理分离，可以理解为 Nginx 处理静态页面，Tomcat 处理动态页面。

   * 动静分离大致分为两种：
     * 纯粹将静态文件独立成单独域名放在独立的服务器上，也是目前主流方案。
     * 将动态跟静态文件混合在一起发布，通过nginx分开

   ```nginx
   server {
       listen 80; #监听端口
       server_name www.example.com 192.168.1.123; #绑定访问的域名，也可以是ip地址
       #root 后面的路径就是从/跟目录开始的
       location /www/ {
           root /data/;
           index index.html index.htm;#响应起始内容
       }
       location /image/ {
           root /data/;
           autoindex on;
       }
   }
   ```

   6. nginx 高可用

      ..........


------
## 参考文献

[1] [就是要让你搞懂Nginx，这篇就够了！](https://mp.weixin.qq.com/s/0IkKgthJdnC_UorZGS5Z0Q) 

[2] [原文链接](https://blog.csdn.net/yujing1314/article/details/107000737)





