export const config = {
    status: 200,
    reset: '0',
    message: 'success',
    data: {
        id: '@guid',
        name: '@cname',
        author_url: 'http://github.com',
        author_image:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14382404807%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660030444&t=fc55bd8561d64a135fa2586b28640071',
        navList: [
            { label: '首页', icon: 'home', path: '/' },
            { label: 'home', icon: 'blog', path: '/home' },
        ],
        home: {
            title: '小王同学',
            subTitle:
                '做事有始有终值得开始的事就值得完成。聪明人做事总是有始有终!把意念深潜得下，何理不可得，把志气奋发起，何事不可做。',
            content: '前端工程师',
            btnList: [
                { icon: 'home', path: 'ws' },
                { icon: 'github', path: 'ws' },
            ],
            rightImage: undefined,
            rightImageList: [
                'https://img0.baidu.com/it/u=3993901385,893039060&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                'https://img2.baidu.com/it/u=2566230917,2808117782&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
                'https://img2.baidu.com/it/u=2566230917,2808117782&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
                'https://img0.baidu.com/it/u=3993901385,893039060&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                'https://img2.baidu.com/it/u=2566230917,2808117782&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
            ],
            textList: [
                [
                    'Semi 设计管理系统',
                    '从 Semi Design，到 Any Design,快速定制你的设计系统，并应用在设计稿和代码中,快速定制你的设计系统，并应用在设计稿和代码中',
                ],
                [
                    'Semi 物料市场',
                    '面向业务场景的定制化组件，支持线上预览和调试',
                ],
                ['Semi Pro (开发中)', '基于 40+ 真实组件代码设计'],
            ],
            imageLogo:
                'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg',
        },
        footer: [
            'Copyright © 2012 艺小昔个人博客 | | Theme By Specs',
            '网站备案号：苏ICP备13026333号-1',
        ],
    },
};
export const article = {
    status: 200,
    reset: '0',
    message: 'success',
    data: {
        list: [
            {
                id: '@guid',
                name: '@cname',
                'age|20-40': 20,
            },
            {
                id: '@guid',
                name: '@cname',
                'age|20-40': 20,
            },
            {
                id: '@guid',
                name: '@cname',
                'age|20-40': 20,
            },
            {
                id: '@guid',
                name: '@cname',
                'age|20-40': 20,
            },
        ],
    },
};
