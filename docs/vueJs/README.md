---
title: VueJs攻克之道
sidebar: auto
sidebarDepth: 1
---


# :bouquet: VueJs攻克之道 :blossom:


[[toc]]

## 什么是MVVM？

MVVM包含了 Model（数据层）、View（视图层）、ViewModel（视图数据层）

核心：<font style="color:red">ViewModel（视图数据层）</font><br/>

![mvvm](/image/vuejs/mvvm.png)

## VueJs的生命周期

### 生命周期的流程图

![life](/image/vuejs/life.png)

### 生命周期过程的解析

:point_right: **new Vue()** :fast_forward: 准备创建一个实例 <br/>
:point_right: **初始化** :fast_forward: 初始化事件，部分生命周期 <br/>
:point_right: **beforeCreated()** :fast_forward: 实例还没创建，根据一些权限判断是否渲染下去  <br/>
:point_right: **初始化** :fast_forward: 1. 初始化data, methods, filter等等；2. 根据一些校验是否可以继续渲染<br/>
:point_right: **实例创建成功** :fast_forward: 结束创建实例阶段<br/> 
:point_right: **created()** :fast_forward: 1. data, methods, filter等等已挂载到实例上面；2. 可以进行后端数据的异步调用获取<br/>
:point_right: **判断是否指定"el"元素** :fast_forward: **是指定：** 查找相对应的tmplate模版 <br/> 
:point_right: **判断是否指定"el"元素** :fast_forward: **不是指定:** 就通过vm.$mount(el)找到相对应的tmplate模版 <br/>
:point_right: **判断是否指定"tempalte"模版** :fast_forward: **是指定：** 将template模版放到render函数里面进行编译<br/> 
:point_right: **判断是否指定"tempalte"模版** :fast_forward: **不是指定：** 将el外部的HTML作为template进行编译<br/> 
:point_right: **beforeMounted()** :fast_forward: 虚拟的DOM模版已经编译成功了，但并未加载到界面上，所以界面上是空白的<br/>
:point_right: **创建vm.$el取代"el"** :fast_forward: 将虚拟的DOM转变成真实的DOM（DOM对象），并把真实的DOM对象渲染到页面上<br/>
:point_right: **mounted()** :fast_forward: 真实的DOM渲染完成，可以进行DOM的操作<br/>
:point_right: **组件完成编译** :fast_forward: 编译状态已经结束，准备进入运行阶段<br/>
:point_right: **beforeUpdate()** :fast_forward: data有数据变化时候，进入准备新的渲染状态，注意：此时data的数据已经变化，但是界面上的数据还是旧的数据，并没有进行同步<br/>
:point_right: **重新生成虚拟的DOM** :fast_forward: 1. 用新的DOM与旧的DOM进行对比，从而生成新的虚拟DOM<br/> 
:point_right: **渲染新的虚拟DOM** :fast_forward: 将新的虚拟DOM渲染到界面上 <br/> 
:point_right: **updated()** :fast_forward: 渲染后的状态，与mounted()相似 <br/> 
:point_right: **beforeDestory()** :fast_forward: 销毁前的状态<br/> 
:point_right: **进行销毁** :fast_forward: 销毁的时候界面上的真实DOM保持不动的（路由除外），其他挂载的属性消失<br/> 
:point_right: **destoryed()** :fast_forward: 销毁之后的状态<br/> 

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

>> v-model实际上是一个语法糖

```html

<input v-model="test" />

```
相当于
```

<template>
    <input :value="test" @input="handleInput">
</template>

export default {
    data() {
        return {
            test: ''
        }
    },
    methods: {
        handleInput(e) {
            this.test = e.target.value;
        }
    }
}

```

## VueJs事件指令

**v-on: (简称: '@')**<br/>

用法: v-on:事件='函数名' (@事件='函数名') 或者是 v-on:事件.修饰符='函数名' (@事件.修饰符='函数名')<br/>

**部分修饰符:**<br/>

* **@xxx.prevent='函数名'**<br/>
阻止行为
* **@xxx.stop='函数名'**<br/>
阻止冒泡传播
* **@xxx.once='函数名'**<br/>
当前函数只会执行一次
* **@xxx.self='函数名'**<br/>
点击绑定的自身标签才会触发事件

## Class 与 Style 如何动态绑定

想法: <br/>
从基本的H5来说，我们都会把样式和Class类都会绑定在相对应的标签（元素）里面，然后通过一系列的DOM操作进行更换和添加
现在以VueJs来说，我们将会以响应式数据的方式绑定到相对应的标签（元素）里面，然后通过改变响应式数据来进行渲染出不一样的界面效果

* 静态界面编写方式 <br/>
    ```html
      <div class="className" style="display: block" />
    ```
* 以响应式数据绑定编写方式 <br/>
    ```html
      <template>
          <div :class="classData" :style="styleData" >
      </template>
    ```
    ```
      export default {
          data() {
            return {
                classData: {
                    className: true 
                },
                styleData: {
                    display: 'block'
                }
            }  
          }
      }  
    ```

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
export default {
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

```vue
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
```vue
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

### .sync

```vue
<text-document v-bind:title.sync="syncData"></text-document>
```
```js
//子组件
this.$emit('update:title', "newValue")
```

### ref

**在DOM元素上使用**
```vue
<template>
    <div ref="ele"></div>
    <div ref="eleV"></div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
            console.log(this.$refs)
            // this.$refs是一个对象
            // this.$refs = {ele: DOM元素对象, eleV: DOM元素对象}
        }
    }
</script>
```

**在组件上使用**
```
<template>
    <MyComponent ref="ele"></MyComponent>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
            console.log(this.$refs.ele)
            // this.$refs.ele是当前子组件的实例
        }
    }
</script>
```

### $parent和$children

#### $parent (不推荐使用)

在子组件上使用，获取父组件的实例
```
// 子组件
<template>
    <div></div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
            console.log(this.$parent)
            // this.$parent获取父组件的实例
        }
    }
</script>
```

#### $children

在父组件上使用，获取所有子组件的实例<br/>
$children是一个数组集合，需要我们记住顺序

```
<template>
    <MyComponent></MyComponent>
    <HisComponent></HisComponent>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
            console.log(this.$children)
            // this.$children是一个数组集合，需要我们记住顺序 [MyComponent, HisComponent]
        }
    }
</script>
```

### eventBus

创建一个总事件池实例(vm实例)
```
// eventBus
export eventBus = new Vue();
```
将事件方法放到事件池
```

import eventBus from 'xxx'

export default {
    data() {
        return {
        
        }   
    },
    created() {
        // 放入事件池
        eventBus.$on('事件名称', result);
    }
}

```
通知事件池执行（调用）
```

import eventBus from 'xxx'

export default {
    data() {
        return {
        
        }  
    },
    methods: {
        handle() {
            // 通知事件池
            eventBus.$emit('事件名称', newResult);
        }
    }
}

```

### $attrs和$listeners

```vue
<!-- 父类 -->
<tempalte>
    <child :name="name" @handle="handle"></child>
</tempalte>

<script>
export default {
    data() {
        return {
            name: ''
        }   
    },
    methods: {
        handle(value) {
            this.name = value; //后面变成hello
        }   
    }   
}
</script>
```
```vue
<!-- 子类 -->
<tempalte>
    <grade-child v-bind="$attrs" v-on="$listeners"></grade-child>
</tempalte>

<script>
export default {
    props: ["name"],
    data() {
        return {
            
        }   
    },
    methods: {
        
    }   
}
</script>
```
```vue
<!-- 子孙类 -->
<tempalte>
    
</tempalte>

<script>
export default {
    created() {
            this.$emit('handle', 'hello')
    }   
}
</script>
```

### provide和inject

需要一起使用，祖先使用了provide里面添加了属性，子孙都可以通过inject使用

```js
<!--祖先组件-->
export default {
    provide: {
        author: 'yushihu',
    },
    data() {},
}

```
```js
<!--子孙组件-->
export default {
    inject: ['yushihu'],
    data() {},
}

```

## Vuex基础以及使用

### 特点

* 全局通信
* 方便缓存
* 方便通过 vue-devtools 来进行状态相关的bug排查。

### 流程图

![vuex](/image/vuejs/vuex.png)

* `Vue Components`: <br/>
Vue组件，HTML界面，负责进行各种交互操作，执行Dispatch方法，触发对应的Actions进行响应。

* `Dispatch`: <br/>
操作行为触发方法，唯一可以触发Actions的方法。

* `Actions`: <br/>
操作行为处理模块，负责处理从`Vue Components`模块中接收到的所有行为操作，可以进行同步异步的操作处理<br/>
可以调用后台API进行数据处理，也可以触发其他action以及执行commit方法触发Mutation<br/>
该模块提供了Promise的封装，以支持action的链式触发。

* `commit`: <br/>
状态改变提交操作方法，唯一可以触发Mutation的方法。

* `Mutations`: <br/>
状态改变操作方法，是Vuex修改state的唯一方法。该方法只能进行同步操作，且方法名只能全局唯一。

* `State`: <br/>
页面状态管理容器对象，全局唯一，以进行统一的状态管理。

**过程：**<br/>
Vue组件接受交互动作，调用dispatch来执行action的相关处理，如果想要改变页面的状态，则需要调用commit来触发mutations的方法来改变state，
从而通过getter获取到state新值，重新渲染Vue组件，界面进行改变。

### 使用

```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 如同Vue的data
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    actions: {
        handleIncrement(context) {
            context.commit("increment");
        }   
    }
})
```
```js
// index.js
import Vue from 'vue'
import App from 'App.vue'
import store from '@/store/store'

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');

```

