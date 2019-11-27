module.exports = {
    base: '/reptile/',
    title: 'python爬虫学习笔记',
    description: '今天很残忍,明天很残酷,但后天很美好',
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }],
    ],
    themeConfig: {
        nav: [
            { text: '我的博客', link: 'https://hzjanger.github.io/', target: false}
            // { text: 'Guide', link: '/guide/' },
            // { text: 'External', link: 'https://google.com' },
        ],
        // 将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
        //假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'hzjanger/reptile',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',
        //每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '上次更新',
        sidebar: [
            {
                title: 'python基础',
                children: [
                    'python基础/json和对象的转换',
                    'python基础/json文件存储',
                    'python基础/csv文件存储'
                ]
            },
            {
                title: '爬虫基础',
                children: [
                    '爬虫基础/http基本原理'
                ]
            },
            {
                title: '常见库的使用',
                children: [
                    '常见库的使用/requests'
                ]
            },
            {
                title: '案例',
                children: [
                    '案例/猫眼电影'
                ]
            }
        ]
    }
};
