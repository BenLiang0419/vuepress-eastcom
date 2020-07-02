---
title: JavaScript & ES6
sidebar: auto
sidebarDepth: 3
---


# :bouquet: VueJs攻克之道 :blossom:


[[toc]]

## 什么是MVVM？

MVVM包含了 Model（数据层）、View（视图层）、ViewModel（视图数据层）

核心：<font style="color:red">ViewModel（视图数据层）</font><br/>

![mvvm](/image/vuejs/mvvm.png)

## VueJs的生命周期

## VueJs常用指令

* **v-model:**<br/>
双向绑定数值
* **v-if:**<br/>
判断标签
* **v-for:**<br/>
循环标签（元素）
* **v-text:**<br/>
以“文本”形式赋值
* **v-bind:**<br/>
给标签的内置属性进行动态绑定数据
* **v-html:**<br/>
相当于'innerHTML'
* **v-cloak:**<br/>
解决{{}}提前呈现问题
* **v-once:**<br/>
数据只会绑定一次，后续怎么改变都无法重新渲染
* **v-show:**<br/>
相当于"display = none"

## v-model



## Class 与 Style 如何动态绑定

## computed 和 watch 的区别和运用的场景

### computed

![mvvm](/image/vuejs/computed.png)

### watch

![mvvm](/image/vuejs/watch.png)

### 区别

computed是计算属性，watch是监听属性<br/>
computed对属性依赖比较大，如果依赖的属性不作改变的话，就不会执行对应的计算属性值
而且computed有缓存的特性，避免每次获取值，都要重新计算。<br/>
watch相当于监听某个值后进行回调，只要监听的值做出变化，则会进行调用<br/>


## v-show 和 v-if 的区别

* v-if是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建，也是惰性的。
如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
* v-show相当于style里面的display，无论初始渲染的条件是什么，条件块里面的元素都会被渲染出来，只是用display="null"进行属性的切换。
* **使用场景:** 
    + v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；
    + v-show 则适用于需要非常频繁切换条件的场景。
* **语法:**<br/>
    ```html
    <div v-if="" />
    
    <div v-show="" />
    ```

## v-for 和 v-if 不建议用在一起

::: warning
永远不要把 v-if 和 v-for 同时用在同一个元素上。
:::

当 v-for 和 v-if 同在一个节点（元素）的时候，v-for的优先级会高于v-if，
相当于v-if将会在每一次循环当中运行，性能会大大被浪费掉<br/>

**注意：这种情况最好使用computed，先将数据处理掉（v-if），后进行循环遍历(v-for)**

## VueJs组件基础

### 定义
组件是可复用的Vue实例，且带有一个属于自己的名字，我们可以把这个实例当作是自定义元素来使用。
### 特点&优势
1. 自定义的标签
2. 可复用
3. 方便维护
4. <font color="#ea163f">**有属于自己的生命周期**</font>
5. 有各种属于自己的响应式数据，方法以及事件
6. 可封装成业务公共组件
7. 可单独开发
### 注册
* 组件命名: <br/>
```html

<! -- kebab-case -->
<my-component-name></my-component-name>

<! -- PascalCase -->
<MyComponentName></MyComponentName>

```

* 局部注册: <br/>
```js

import ComponentA from 'xxxxx'

new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
  }
})

```

* 全部注册: <br/>
```js

import ComponentA from 'xxxxx'

Vue.component('my-component-name', ComponentA)

// or

Vue.component('my-component-name', { /* ... */ })

```

## VueJs组件间通信方式

一般来说，组件间通信方式分为：父子组件通信，和非父子组件通信；

* 父子组件通信：<br/>

`props`、`$emit(自定义事件event)`、`ref`、`$parent`、`$children`、`v-model`、`.sync`

* 非父子组件通信：<br/>

`eventBus`、`provide`、`inject`、`$attrs`、`$listeners`、`Vuex`

### props

```
// 父组件
<my-component-name :propsData="dataObj"></my-component-name>

// 子组件
export.default = {
    props: [
        propsData: {
            type: String,
            default: () => ''
        }
    ]
}
```

::: warning
第一，不应该在一个子组件内部改变 prop，这样会破坏单向的数据绑定，导致数据流难以理解。如果有这样的需要，可以通过 data 属性接收或使用 computed 属性进行转换。

第二，如果 props 传递的是引用类型(对象或者数组)，在子组件中改变这个对象或数组，父组件的状态会也会做相应的更新，利用这一点就能够实现父子组件数据的“双向绑定”，
虽然这样实现能够节省代码，但会牺牲数据流向的简洁性，令人难以理解，最好不要这样去做。想要实现父子组件的数据“双向绑定”，可以使用 v-model 或 .sync。
:::

### $emit(自定义事件event)

```
// 父组件
<template>
    <base-input v-model="input" @myEvent="doSomething"></base-input>
</template>
<script>
    export default {
        components: {
            'base-input': ComponentA,
        },
        data() {
            return {
                input: ''
            }
        },
        methods: {
            doSomething(value) {
                // ...
            }
        }
    }
</script>
```
```
// 子组件
<template>
    <div />
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            }
        },
        methods: {
            doSomething() {
                this.$emit('myEvent', 'value')
            }
        }
    }
</script>
```

### 