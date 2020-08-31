# 网格布局（grid）

## 1、grid布局的属性分类

1、定义在容器上面的称为容器属性；

2、定义在项目上面的称为项目属性；

```html
<div class="container"><!-- 这是容器，容器下面直接子元素就是项目 -->
  <div class="items" style='background: hsla(100, 100%, 50%, 0.5);'><p>1</p></div>
  <div class="items" style='background: hsla(30, 100%, 50%, 0.5);'><p>2</p></div>
  <div class="items"style='background: hsla(60, 100%, 50%, 0.5);'><p>3</p></div>
  <div class="items"style='background: hsla(150, 100%, 50%, 0.5);'><p>4</p></div>
  <div class="items"style='background: hsla(200, 100%, 50%, 0.5);'><p>5</p></div>
  <div class="items"style='background: hsla(260, 100%, 50%, 0.5);'><p>6</p></div>
</div>
```

```css
.container{
    /*激活grid*/
    display: grid;/*或者inline-grid*/
    /*
        注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-			cell、vertical-align和column-*等设置都将失效。
    */
    /*划分行和列。以下为3 x 3*/
    grid-template-columns: 100px 100px 100px;/*划分成三行三列。也可以使用百分比：（33.33% 33.33% 33.33%） *//*定义对应的那列宽*/
    grid-template-rows: 100px 100px 100px;/*定义对应的那行高*/
    
    /*使用repeat()*/
    /*
    grid-template-columns: repeat(3, 33.33%); 
    	repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。
    	repeat()重复某种模式也是可以的。如：
    grid-template-columns: repeat(2, 100px 20px 80px);。
    */
}
```

#### 2、grid-template-columns和grid-template-rows

* `repeat()` 接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。

* `auto-fill`  如 `repeat(auto-fill, 100px);`表示每列宽度`100px`，然后自动填充，直到容器不能放置更多的列。

* `fr (fraction 的缩写，意为"片段")`  如 `grid-template-columns: 1fr 2fr;` 如果两列的宽度分别为`1fr`和`2fr`，就表示后者是前者的两倍。`fr`可以与绝对长度的单位结合使用，这时会非常方便。如：`grid-template-columns: 150px 1fr 2fr;` 

* `minmax()` `minmax()`函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。如：`grid-template-columns: 1fr 1fr minmax(100px, 1fr);`

* `auto` 表示有浏览器决定自己决定。 ` grid-template-columns: 100px auto 100px;` 

* **网格线的名称** 可以使用方括号，指定每一根网格线的名字。如：

  ```css
    grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
    grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
  ```

#### 3、grid-row-gap、grid-column-gap和grid-gap

1、`grid-row-gap`属性设置行与行的间隔（行间距），`grid-column-gap`属性设置列与列的间隔（列间距）。	`grid-gap: <grid-row-gap> <grid-column-gap>`;

