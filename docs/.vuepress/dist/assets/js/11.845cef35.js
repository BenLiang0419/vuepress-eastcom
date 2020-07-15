(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(r,t,a){"use strict";a.r(t);var s=a(42),i=Object(s.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"/image/springcloud/springcloud.png",alt:""}})]),r._v(" "),a("h1",{attrs:{id:"springcloud的一些情一些事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud的一些情一些事"}},[r._v("#")]),r._v(" 🎉 SpringCloud的一些情一些事 💯")]),r._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#什么是springcloud？"}},[r._v("什么是SpringCloud？")])]),a("li",[a("a",{attrs:{href:"#spring-cloud核心组件：eureka"}},[r._v("Spring Cloud核心组件：Eureka")])]),a("li",[a("a",{attrs:{href:"#spring-cloud核心组件：feign"}},[r._v("Spring Cloud核心组件：Feign")])]),a("li",[a("a",{attrs:{href:"#spring-cloud核心组件：ribbon"}},[r._v("Spring Cloud核心组件：Ribbon")])]),a("li",[a("a",{attrs:{href:"#spring-cloud核心组件：hystrix"}},[r._v("Spring Cloud核心组件：Hystrix")])]),a("li",[a("a",{attrs:{href:"#spring-cloud核心组件：zuul"}},[r._v("Spring Cloud核心组件：Zuul")])]),a("li",[a("a",{attrs:{href:"#总结"}},[r._v("总结")])]),a("li",[a("a",{attrs:{href:"#参考文献"}},[r._v("参考文献")])])])]),a("p"),r._v(" "),a("h2",{attrs:{id:"什么是springcloud？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是springcloud？"}},[r._v("#")]),r._v(" 什么是SpringCloud？")]),r._v(" "),a("p",[r._v("Spring Cloud 为开发人员提供了快速构建分布式系统中一些常见模式的工具（例如配置管理、服务发现、断路器、智能路由、微代理、控制总线、一次性令牌、全局锁、leader选举、分布式session、集群状态）。分布式系统的协调导致了样板模式, 使用 Spring Cloud 开发人员可以快速地支持实现这些模式的服务和应用程序。它们可以在任何分布式环境中很好地工作，包括开发人员自己的笔记本电脑，裸机数据中心，以及Cloud Foundry等托管平台。")]),r._v(" "),a("h2",{attrs:{id:"spring-cloud核心组件：eureka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud核心组件：eureka"}},[r._v("#")]),r._v(" Spring Cloud核心组件：Eureka")]),r._v(" "),a("h2",{attrs:{id:"spring-cloud核心组件：feign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud核心组件：feign"}},[r._v("#")]),r._v(" Spring Cloud核心组件：Feign")]),r._v(" "),a("h2",{attrs:{id:"spring-cloud核心组件：ribbon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud核心组件：ribbon"}},[r._v("#")]),r._v(" Spring Cloud核心组件：Ribbon")]),r._v(" "),a("h2",{attrs:{id:"spring-cloud核心组件：hystrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud核心组件：hystrix"}},[r._v("#")]),r._v(" Spring Cloud核心组件：Hystrix")]),r._v(" "),a("h2",{attrs:{id:"spring-cloud核心组件：zuul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud核心组件：zuul"}},[r._v("#")]),r._v(" Spring Cloud核心组件：Zuul")]),r._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),a("p",[r._v("最后再来总结一下，上述几个Spring Cloud核心组件，在微服务架构中，分别扮演的角色")]),r._v(" "),a("ul",[a("li",[r._v("各个服务启动时，Eureka Client都会将服务注册到Eureka Server，并且Eureka Client还可以反过来从Eureka Server拉取注册表，从而知道其他服务在哪里")]),r._v(" "),a("li",[r._v("服务间发起请求的时候，基于Ribbon做负载均衡，从一个服务的多台机器中选择一台")]),r._v(" "),a("li",[r._v("基于Feign的动态代理机制，根据注解和选择的机器，拼接请求URL地址，发起请求")]),r._v(" "),a("li",[r._v("发起请求是通过Hystrix的线程池来走的，不同的服务走不同的线程池，实现了不同服务调用的隔离，避免了服务雪崩的问题")]),r._v(" "),a("li",[r._v("如果前端、移动端要调用后端系统，统一从Zuul网关进入，由Zuul网关转发请求给对应的服务")])]),r._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[r._v("#")]),r._v(" 参考文献")])])}),[],!1,null,null,null);t.default=i.exports}}]);