# react 工作原理

## Virtual DOM(虚拟DOM)

### what?

用JavaScript对象表示DOM信息和结构，当状态变更的时候，重新渲染这个JavaScript的对象架构，这个JavaScript对象称为Virtual DOM.



### why?

DOM操作很慢（why ? 因为每个dom都有很多属性，如果直接对dom diff，会diff所有属性,成本太高，而对vdom diff，则可以根据我们的需要进行diff），轻微的操作都可能导致页面的重新排版，非常耗性能，相对于DOM对象，js对象处理起来更快，而且更简单。通过diff算法对比新旧vdom之间的差异，可以批量的、最小化的执行dom操作，从而提高性能。



### where?



## React.createElement(...)

### 什么时候执行？

经过babel-loader编译，会调用React.createElement()