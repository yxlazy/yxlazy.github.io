## 使用curl安装包

这里以安装`nodejs` 为例

```bash
$ curl -o node14.tar.gz -L https://nodejs.org/dist/v14.15.4/node-v14.15.4-darwin-x64.tar.gz
```

`-o` 指明输出到一个文件而不是标准输出

`-o, --output <file> Write to file instead of stdout` 

`-L` 指明若有重定向则跟踪重定向

` -L, --location      Follow redirects` 

## 参考

[使用curl下载压缩文件](https://blog.csdn.net/weixin_43459866/article/details/113417341) 

[curl 的用法指南](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html) 



