# defer, async和DOMContentLoaded

## defer<sup>[1]</sup>

* 它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本
* 下载外部脚本，与解析HTML网页同时进行
* 添加了该属性的`script`标签，下载的脚本文件将会在DOMContentLoaded事件触发前执行（即刚刚读取完`</html>` 标签），而且**可以保证按页面中`script` 标签出现的顺序执行**。

## async<sup>[2]</sup>

* 异步下载外部脚本，解决“阻塞效应”
* 脚本下载完成，浏览器暂停解析HTML页面，执行下载完成的脚本
* 脚本执行完毕，浏览器继续解析HTML页面

**该属性无法保证脚本执行顺序**

## DOMContentLoaded事件

* `DOMContentLoaded` 事件只有在DOM结构生成之后才会触发



## 执行顺序

* 添加了`async` 属性的，会在脚本加载完成后就立即执行脚本，可能在`DOMContentLoaded` 事件之前，也可能在之后；

* 添加 了`defer` 属性的，会在`DOMContentLoaded` 事件之前执行脚本

## 参考

[1] [derfer属性](https://wangdoc.com/javascript/bom/engine.html#defer-%E5%B1%9E%E6%80%A7) 

[2] [async属性](https://wangdoc.com/javascript/bom/engine.html#async-%E5%B1%9E%E6%80%A7)