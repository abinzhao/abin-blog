import Mock from 'mockjs';
import { config, article, details } from './mock';

// 用mock拦截对应的请求地址，并发送返回数据对象
const configRes = Mock.mock('/api/abin/blog/config', 'get', config);
const detailsRes = Mock.mock('/api/abin/blog/detail', 'post', details);
const articleRes = Mock.mock(
    '/api/abin/blog/search',
    'post',
    (options: any) => {
        return article;
    },
);
// 导出返回对象，可以导出多个对象
export default {
    configRes,
    articleRes,
    detailsRes,
};
