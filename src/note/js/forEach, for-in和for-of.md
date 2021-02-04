## forEach, for-in 和 for-of

### forEach

`forEach` 专门用来循环遍历数组，参数是个函数， 接收数组元素， 索引和源数组，没有返回值。不能`continue` 跳过或者`break` 终止循环，`return` 没有意义

### for...in

`for-in` 用于枚举对象中的非符号键属性，遍历对象本身的所有课枚举属性，以及对像从其构造函数语言性中继承的属性

### for...of

`for..of` 是ES6新引入的特性

`for..of` 会遍历可迭代的对象（如`array` `map` `set` `string` `int32Array` 等实现了`Symbol.iterator` 方法的对象），调用对象上的`Symbol.iterator` 方法

```js
const arr = [2,3,4,5]

arr[Symbol('arr')] = 6

console.log('forEach')
arr.forEach(function (el, index, origin) {
    console.log('el -- ', el)
    console.log('index -- ', index)
    console.log('origin -- ', origin)
})
//输出
//el --  2
//index --  0
//origin --  [ 2, 3, 4, 5, [Symbol(arr)]: 6 ]
//el --  3
//index --  1
//origin --  [ 2, 3, 4, 5, [Symbol(arr)]: 6 ]
//el --  4
//index --  2
//origin --  [ 2, 3, 4, 5, [Symbol(arr)]: 6 ]
//el --  5
//index --  3
//origin --  [ 2, 3, 4, 5, [Symbol(arr)]: 6 ]

console.log('for..in')
for (const key in arr) {
  console.log(key)
}
//输出
//0
//1
//2
//3
//打印的是数组的键，且无法遍历`Symbol` 类型的键

console.log('for..of')
for (const el of arr) {
  console.log(el)
}
//输出
//2
//3
//4
//5
//打印的是数组元素
```

*  `for...of` `for...in` 都可以迭代一个数组，但他们之间的区别很大。`for..in` 迭代的是对象的键，而`for...of` 迭代的是对象的值
* 另一个区别在于，`for...in` 可以操作任何对象，提供了查看对象属性的一种方法。但是`for..of` 关注迭代对象的值
* `for..of` 无法遍历对象

