# koa2 app.context

当在使用`koa2`框架时，好奇为什么通过 `app.context.xxx` 添加的属性可以通过`ctx.xxx` 调用，于是乎看了下相关源码

------

在`application.js`文件中，看到了构造函数中初始化部分代码如下：

```js
this.middleware = [];//用来存储中间件，也就是洋葱模型的核心
this.context = Object.create(context);//实例化this.context对象
this.request = Object.create(request);//实例化this.request对象
this.response = Object.create(response);//实例化this.response对象
```

`this.context = Object.create(context);` 通过`Object.create` 实例化一个对象`this.context` 这个对象将会继承`context` 对象的所有属性和方法；

 ```js
  createContext(req, res) {
    const context = Object.create(this.context);
    const request = context.request = Object.create(this.request);
    const response = context.response = Object.create(this.response);
    context.app = request.app = response.app = this;
    context.req = request.req = response.req = req;
    context.res = request.res = response.res = res;
    request.ctx = response.ctx = context;
    request.response = response;
    response.request = request;
    context.originalUrl = request.originalUrl = req.url;
    context.state = {};
    return context;
  }
 ```

`createContext`方法中第一条语句 `const context = Object.create(this.context);`  也就是说当我们通过`app.context.xxx` 添加某个属性时，由于通过`Object.create(this.context)` 继承了添加在`app.context` 对象上的属性，因此可以通过`ctx.xxx` 直接调用。

## 补充

`Object.create` 该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。

```js
const obj1 = {obj1: 'test'};
const inherit = Object.create(obj1);

console.log(obj1);//{obj1: "test"}
console.log(inherit);//{}
console.log(inherit.obj1);//test
console.log(inherit.obj1 === obj1.obj1);//true
Object.getPrototypeOf(inherit) === obj1;//true

obj1.o = [1,2,3];
console.log(obj1);//{obj1: "test", o: [1, 2, 3]}
console.log(inherit.o);// [1, 2, 3]
```





