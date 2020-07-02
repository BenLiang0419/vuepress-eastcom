---
title: SpringCloud的一些情一些事
sidebar: auto
sidebarDepth: 2
---

![](/image/springcloud/springcloud.png)

# :tada: SpringCloud的一些情一些事 :100:


[[toc]]

## 什么是SpringCloud？

Spring Cloud 为开发人员提供了快速构建分布式系统中一些常见模式的工具（例如配置管理、服务发现、断路器、智能路由、微代理、控制总线、一次性令牌、全局锁、leader选举、分布式session、集群状态）。分布式系统的协调导致了样板模式, 使用 Spring Cloud 开发人员可以快速地支持实现这些模式的服务和应用程序。它们可以在任何分布式环境中很好地工作，包括开发人员自己的笔记本电脑，裸机数据中心，以及Cloud Foundry等托管平台。

## Spring Cloud核心组件：Eureka

## Spring Cloud核心组件：Feign

## Spring Cloud核心组件：Ribbon

## Spring Cloud核心组件：Hystrix

## Spring Cloud核心组件：Zuul

## 总结

最后再来总结一下，上述几个Spring Cloud核心组件，在微服务架构中，分别扮演的角色

* 各个服务启动时，Eureka Client都会将服务注册到Eureka Server，并且Eureka Client还可以反过来从Eureka Server拉取注册表，从而知道其他服务在哪里
* 服务间发起请求的时候，基于Ribbon做负载均衡，从一个服务的多台机器中选择一台
* 基于Feign的动态代理机制，根据注解和选择的机器，拼接请求URL地址，发起请求
* 发起请求是通过Hystrix的线程池来走的，不同的服务走不同的线程池，实现了不同服务调用的隔离，避免了服务雪崩的问题
* 如果前端、移动端要调用后端系统，统一从Zuul网关进入，由Zuul网关转发请求给对应的服务

## 参考文献



