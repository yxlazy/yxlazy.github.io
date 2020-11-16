# gzip压缩优化配置

[nginx gzip 文档](https://docs.nginx.com/nginx/admin-guide/web-server/compression/) 

[http gzip module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html) 

```ng
gzip on; # 开启Gzip
gzip_vary on;
gzip_proxied any;
gzip_comp_level; # 压缩级别
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; # 进行压缩的文件类型 默认仅压缩text/html

```

* 配置压缩的指令可以包含在http块内的server配置块中或者location配置块中
* `gzip <on | off>`：  启用或者禁用gzip压缩。默认值是 `gzip off` 
* `gzip_buffers <number size>` : 设置用于压缩一个响应的缓冲区的`number`和`size` 。默认这个缓冲区的`size`等于一个内存页。可能是`4k` 或者`8k` ，取决于平台。默认值：`gzip_buffers 32 4k | 16 8k` 
* `gzip_comp_level <level>` ：设置`gizp`压缩一个响应的`level`。接收值的范围`1~9` 。默认值`gzip_comp_level 1`  
* 待续....