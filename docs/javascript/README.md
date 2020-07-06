---
title: JavaScript实操之力
sidebar: auto
sidebarDepth: 2
---

# JavaScript实操之力

[[toc]]

## 变量声明

* `var` 声明一个变量，可赋值一个初始值
* `let` 声明一个块作用域的变量，可赋值一个初始值
* `const` 声明一个块作用域的<font style="color:blue">只读命令变量</font>
* `undefined` 没有初始值赋值的变量，则默认呈现undefined

## 数据类型

* Boolean， true和false
* Number，数值类型
* String，字符串类型
* undefined，空类型，未定义的时候默认呈现
* Null

## 类型判断

1. **typeof**<br/>用于获取类型
```js
console.log(typeof 12); // number
```
```
undefined, 返回值是undefined
true false, 返回值是boolean
123 424, 返回值是number
"2444", 返回值是string
object {}, 变量类型是引用类型或者是Null类型, 返回值是object
null, 返回值是object
[], 返回值是object
```

2. **instanceof**<br/>用于判断类型
```js
var a = new Array();
if(a instanceof Array) {
    console.info("是数组");
} else {
    console.info("不是数组");
}
```

## 条件&循环遍历

* if-else
```js
if(条件) {

} else {

}
```

* for
```js
for (语句1;语句2;语句3) {
    被执行的代码块
}
```

* for in
```js
for (键值 in 对象&数组) {
    被执行的代码块
}
```

* while
```js
while(表达式){
    代码块
}
```

* forEach()
```js
let a = [1,3,5,7];
a.forEach(function(val, index, arr){
    arr[index] = val * 2
})
a ; // [2, 6, 10, 14]
```

## 数组与字符通用方法

:running: const
```js

```
:running: includes
```js

```
:running: indexOf
```js

```
:running: lastIndexOf
```js

```
:running: slice
```js

```

## 数组常用方法

![Array](/image/javascript/array.png)

### 浅拷贝

* slice
* Array.form(arr)
* ...操作符 (推荐)
```js
const arrTest = [1, 2, 3];
const arrData = [4, 5, ...arrTest]; // [4, 5, 1, 2, 3]
const objTest = {a: "1"};
const objData = {b: "2", ...objTest}; // {b: "2", a: "1"}
```

### 合并
```js
const arr1 = ["test", "java", "js"];
const arr2 = ["vue", "es6"];
const arr3 = arr1.concat(arr2);
console.log(arr3); // ["test", "java", "js", "vue", "es6"]
```
```js
const arr1 = ["test", "java", "js"];
const arr2 = ["vue", "es6"];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // ["test", "java", "js", "vue", "es6"]
```

### 去重
* es6 Set去重(推荐)
```js
const arr1 = [1, 2, 3, 4, 3, 4];
const arr2 = [...new Set(arr1)];
console.log(arr2); // [1, 2, 3, 4];
```

* 数组遍历去重
```js
const arr1 = [1, 2, 3, 4, 3, 4];
let hash = [];
for(index in arr1) {
    if(hash.indexOf(arr1[index]) === -1) {
        hash.push(arr1[index]);
    } 
}
console.log(hash); // [1, 2, 3, 4];
```

### 取交集
```js
const a = [0, 1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7, 8];
const arr = [...new Set(a)].filter(item => b.includes(item))
console.log(arr);
```

### 取差集
```js
const a = [0, 1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7, 8];
const arr = [...new Set(a), ...new Set(b)].filter(item => !b.includes(item) || !a.includes(item))
```

### 转对象
```js
const arr = [1, 2, 3, 4];
const newObj = {...arr};
console.log(newObj); //  {0: 1, 1: 2, 2: 3, 3: 4}
```
如果是类数组对象就可以通过Array.form转数组<br/>
注意：是类数组对象
```js
const obj = {0: 0, 1: 1, 2: 2, length: 3};
let newArr = Array.from(obj); 
console.log(newObj); // [0, 1, 2]
```

### 转字符串
```js
const arr1 = [1, 2, 3, 4, 3, 4]
const str = arr1.join(",")
console.log(str); // 1,2,3,4,3,4
```
### 数组摊平(对象转数组 [...key] & [...value])
````js
const obj = {a: '群主', b: '男群友', c: '女裙友', d: '未知性别'}
const arr = Object.values(obj).flat();
console.log(arr); // ["群主", "男群友", "女裙友", "未知性别"]
const keyArr = Object.keys(arr).flat();
console.log(keyArr);  // ["0", "1", "2", "3"]
````

## 数组常用遍历

数组遍历`forEach、every、some、filter、map、reduce、reduceRight、find、findIndex`

### forEach()
forEach() 简单的循环
```js
const arr = [1, 2, 3, 4]
const isAllNum = arr.forEach(item => console.log(item))
```

### filter()
filter() 循环判断
```js
const arr = [1, 2, 3, "2", 5]
const isAllNum = arr.filter(item => typeof item === 'number')
console.log(isAllNum); // [1, 2, 3, 5]
```

### map()
map() 返回一个新的数组
```js
const arr = [1, 2, 3, 5]
const isAllNum = arr.map(item => item * 2)
console.log(isAllNum); // [2, 4, 6, 10]
```

### reduce()
reduce()遍历并将当前次回调函数的返回值作为下一次回调函数执行的第一个参数<br/>
用处：<br/>
* 累加值<br/>
* 结构化(数组或者对象)<br/>
* 将数组转换为对象<br/>
* 展开更大的数组<br/>
* 在一次遍历中进行两次计算<br/>
* 将映射和过滤函数组合<br/>
```js
let arr = [1,2,3,4];
arr.reduce(function(pre,cur){return pre + cur}); // return 10

const objArr = arr.reduce((pre, cur) => {
    return [...pre, {value: cur}]
}, []);
// [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
```

### find()&findIndex()
find()查找元素，findIndex()查找元素的下标
```js
const arr = [1, 2, 3, 5]
const data = arr.find(item => item === 5);
console.log(data);
const index = arr.findIndex(item => item ===3);
console.log(index);
```

### every()
every() 循环判断所有, 全部正确才是正确；
```js
const arr = [1, 2, 3, "2", 5]
const isAllNum = arr.every(item => typeof item === 'number')
console.log(isAllNum) // false
```

### some()
some() 循环判断所有, 有一个正确就是正确；
```js
const arr = [1, 2, 3, "2", 5]
const isAllNum = arr.some(item => typeof item === 'number')
console.log(isAllNum) // true
```

## 字符常用方法

## 事件操作

## DOM操作(DOM: Document Object Model)

## BOM操作(BOM: 内置对象)

## 定时器函数

## 对象




