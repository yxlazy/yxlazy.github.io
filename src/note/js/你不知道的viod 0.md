# 你不知道的void 0

当在看antd编译后的js代码时，看到一段代码：

```js
exports["default"] = void 0;
```

然后在console中输入后：

```js
void 0;
//undefined
```

返回的是`undefined` ,由此可见这应该是将其初始化为`undefined` , 然而为什么不直接用`undefined` 而是通过`void 0` , 查询了别个的博客后了解到，原来，`undefined` 是可以重写的，虽然在ES5中已经被禁止作为全局对象时的这种行为，但是在局部作用域中`undefined` 仍然是可以重写的

```js
(function() {
    const undefined = 10;
    
    alert(undefined);
}());

(function() {
    undefined = 10;
    
    alert(undefined);
}());
```

为什么选择void 0 作为undefined的替代：

* void 0 是表达式中最短的。用 void 0 代替 undefined 能节省字节。

## 参考

* [void 0 与 undefined的区别](https://blog.csdn.net/juzipchy/article/details/86367565)