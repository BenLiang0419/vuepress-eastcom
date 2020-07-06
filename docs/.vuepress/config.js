
module.exports = {
    title: '东信社区',
    description: '后端？前端？不，我们是全栈',
    base: '/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: '/logo.png',
        nav:[
            { text: '首页', link: '/' },
            {
                text: '前端',
                items: [
                    { text: 'JavaScript & ES6', link: '/javascript/' },
                    { text: 'VueJs', link: '/vueJs/' },
                    { text: 'ES6', link: '/essix/' },
                    { text: '工程化', link: '/engineering/' }
                ]
            },
            {
                text: '后端',
                items: [
                    { text: 'SpringBoot', link: '/springboot/' },
                    { text: 'SpringCloud', link: '/springcloud/' }
                ]
            },
            { text: '组件库', link: '/compoents/' },
            {
                text: '仓库',
                items: [
                    { text: 'Github', link: 'https://github.com/' },
                    { text: 'GitLab', link: 'http://gitlab.eastcom-sw.com/' }
                ]
            },
            {
                text: '社区',
                items: [
                    { text: 'CSDN', link: 'https://www.csdn.net/' },
                    { text: '掘金社区', link: 'https://juejin.im/timeline' },
                    { text: 'Segmentfault', link: 'https://segmentfault.com/' }
                ]
            }
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2 // 侧边栏显示2级
    }
};