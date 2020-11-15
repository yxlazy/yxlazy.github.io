# arguments.callee 和 fn.caller

## arguments.callee 

* 指向`arguments`对象**所在的函数**的指针。可以让函数解耦

  ```js
  //阶乘函数
  function factorial(num) {
      if (num <= 1) {
          return 1;
      } else {
          return num * arguments.callee(num - 1);//解耦。即，即使将当前函数赋值给另外的变量，也能保证该函数正常执行
      }
  }
  //赋值给另一个变量
  let trueFactorial = factorial;
  
  //指向另一个函数
  factorial = function () {
      return 0;
  }
  
  trueFactorial(5);//解耦成功。依然正常执行
  ```

## fn.caller

* 指向**调用当前函数的函数**的指针，或者如果是在全局作用域中调用的则为 null

  

  ```js
  function outer() {
      inner();
  }
  
  function inner() {
      console.log(inner.caller)//打印outer函数 //等价于console.log(arguments.callee.caller);//降低耦合度 // 在严格模式下访问arguments.callee报错
  }
  
  outer();
  ```

  