# for-in 和 for-of

`for-in` 用于枚举对象中的非符号键属性

```js
for (const el in [2,3,4,5]) {
    console.log(el)
}
//0
//1
//2
//3
//打印的是数组的键
```

`for-of` 用于遍历可迭代对象的元素

```js
for (const el of [2,3,4,5]) {
    console.log(el)
}
//2
//3
//4
//5
//打印的是数组元素
```

