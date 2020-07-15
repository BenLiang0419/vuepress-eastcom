---
title: ES6微妙之处
sidebar: auto
sidebarDepth: 2
---

# ES6微妙之处

[[toc]]


## let const

* let：确定需要改变变量的值时候使用；
* const：保护常量，不做修改使用的；

## 块级作用域
* 普通JS里有全局作用域和局部作用域，局部作用域的声明会修改全局作用域里变量的值。
```js
function fun() {
    var num = 3;
    if(true) {
        var num = 4;
        console.log(num); // 4
    }
    console.log(num); // 4
}
fun();
```
* ES6里面，使用let 和 const 就会有块级作用域，块级声明用于指定块(字符 { 和 } 之间的区域)
，非指定的无法访问这个声明。
```js
function fun() {
    let num = 3;
    if(true) {
        let num = 4;
        console.log(num); // 4
    }
    console.log(num); // 3
}
fun();
```

## 模版字符串

```js

let example = 'exp';

// bad
const foo = 'this is a' + example;

// good
const foo = `this is a ${example}`;

```

## 标签模版

## 变量解构(暂时不懂)

## 箭头函数

```js
var fun = function(num) {
    return num;
}
// 等同于
var fun = (num) => num;

```

## 扩展运算符(...)

## Symbol(懂了50%, 用处是什么)

## 迭代器和for..of..(原理暂时不懂)

## Set

* 实例
```js
let set = new Set();

let set = new Set([1,2,3]);

``` 
函数可以接受一个数组或者是具有迭代器(iterable接口的数据结构)作为参数用于初始化。

* 去重
```js
const arr = [...new Set([1,2,3,4,4,3,2])]; // [1,2,3,4]
```

* 实例方法和属性
```js
let set = new Set([1,2,3]);

// Set.prototype.size: 长度
set.size; // 3

// Set.prototype.add : 添加
set.add(4); // set: [1,2,3,4];
set.size; // 4

// Set.prototype.has: 是否存在 
set.has(4); //4

// Set.prototype.delete: 删除
set.delete(3);
set.has(3); // false
set.size; // 3

// Set.prototype.delete: 全删
set.clear();
set.has(2); // false
set.size; // 0

```

* Array.from方法可以将 Set 结构转为数组
```js
const arr = [1,2,3,3];
let set = new Set(arr);
const numbers = Array.from(set); // [1,2,3]
```

* 遍历操作
```js
let set = new Set([1,2,3]);

// Set.prototype.keys()：返回键名的遍历器
for(let key of set.keys()) {
    // 1
    // 2
    // 3
}

// Set.prototype.values()：返回键值的遍历器
for(let key of set.values()) {
    // 1
    // 2
    // 3
}

// Set.prototype.entries()：返回键值对的遍历器
for(let item of set.entries()) {
    console.log(item)
    // [1,1]
    // [2,2]
    // [3,3]
}

// Set.prototype.forEach()：使用回调函数遍历每个成员
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 2 : 2
// 3 : 3

```

## Map

* 实例
```js
const map = new Map();

map.set('s',"ss");
map.get('s'); // "ss"

const k = {"g": "2"};
map.set(k,"kk");
map.get(k); // "kk"

const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

```
对象是key=字符串，value=值
Map是key=值，value=值

* 实例方法和属性
```js
const map = new Set([
  ['foo', 1],
  ['bar', 2]
]);

// Map.prototype.size: 长度
map.size; // 2

// Map.prototype.set : 添加
map.set('soo', 4);
map.size; // 3

// Map.prototype.get : 获取
map.get('foo'); // 1

// Map.prototype.has: 是否存在 
map.has('foo'); // true

// Map.prototype.delete: 删除
map.delete('foo');
map.has('foo'); // false
map.size; // 2

// Map.prototype.delete: 全删
map.clear();
map.has('bar'); // false
map.size; // 0

```

* 遍历

```js
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

// Map.prototype.keys()：返回键名的遍历器。
for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

// Map.prototype.values()：返回键值的遍历器。
for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

// Map.prototype.entries()：返回所有成员的遍历器。
for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
```
* 转数组
```js
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const arr = [...map.keys()]
// [1, 2, 3]

const arr = [...map.values()]
// ['one', 'two', 'three']

const arr = [...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

const arr = [...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
```

## Proxy

## Reflect

## Promise






