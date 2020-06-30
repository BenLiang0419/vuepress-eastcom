
module.exports = {
    title: '家盛社区',
    description: '后端？前端？不，我们是全栈',
    base: '/eastcom/',
    // dest: './docs/.vuepress/dist',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: '/logo.png',
        nav:[
            { text: '首页', link: '/' },
            { text: 'JavaScript', link: '/javascript/' },
            { text: 'VueJs', link: '/vueJs/' },
            { text: 'GitLab', link: 'http://gitlab.eastcom-sw.com/' },
            {
                text: '社区',
                items: [
                    { text: 'CSDN', link: 'https://www.csdn.net/' },
                    { text: '掘金社区', link: 'https://juejin.im/timeline' },
                    { text: 'Segmentfault', link: 'https://segmentfault.com/' }
                ]
            },
            { text: 'Github', link: 'https://github.com/' }

        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};