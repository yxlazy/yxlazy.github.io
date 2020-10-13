# 在原生JavaScript中创建不可变对象

[译文连接](https://www.jstips.co/en/javascript/creating-immutable-objects-in-native-javascript/)

JavaScript是一种灵活的语言，你可以重新定义任何内容。但是，当项目变得复杂时，我们会发现可变数据结构存在问题。当我们使用最新版本的JavaScript，这个问题就会变得不一样了。因为现在，我们能创建不可变的对象。我将会通过三种不同的方式一步一步的告诉你怎么去完成操作。

## 等等，什么是不可变？

*对象的不可变性意味着一旦创建好这个对象，就不希望它发生任何改变，也就是让它变成只读类型*。



假设我们需要定义一个`car`对象，并在整个项目中使用它的属性去执行操作。我们不允许错误的更改任何数据。

```js
const myTesla = {
    maxSeepd: 155,
    batteryLife: 300,
    weight: 2300
};
```

## Object.preventExtensions()

此方法可防止向现有对象添加新属性。`preventExtensions()` （防止扩展）是不可逆操作。我们将永远不能向这个对象添加额外的属性。

```js
Object.isExtensible(myTesla); //true
Object.preventExtensions(myTesla);
Object.isExtensible(myTesla); //false
myTesla.color = 'blue';
consoe.log(myTesla.color); //undefined
```

## Object.seal()

此方法防止添加或删除属性。`seal()` （密封）也防止属性描述符修改。

```js
Object.isSealed(myTesla); // false
Object.seal(myTesla);
Object.isSealed(myTesla); // true

myTesla.color = 'blue';
console.log(myTesla.color); // undefined

delete myTesla.batteryLife; // false
console.log(myTesla.batteryLife); // 300

Object.defineProperty(myTesla, 'batteryLife'); // TypeError: Cannot redefine property: batteryLife
```



## Object.freeze()

此方法与`Object.seal()` 相似，是它的升级版。此方法使属性不可写。

```js
Object.isFrozen(myTesla); // false
Object.freeze(myTesla);
Object.isFrozen(myTesla); // true

myTesla.color = 'blue';
console.log(myTesla.color); // undefined

delete myTesla.batteryLife;
console.log(myTesla.batteryLife); // 300

Object.defineProperty(myTesla, 'batteryLife'); // TypeError: Cannot redefine property: batteryLife

myTesla.batteryLife = 400;
console.log(myTesla.batteryLife); // 300
```

## 补充

在`strict mode` （严格模式）下，当你尝试去更改一个不可变对象时，它将会抛出错误。