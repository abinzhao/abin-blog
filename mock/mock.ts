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
