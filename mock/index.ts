import Mock from 'mockjs';
import { config, article } from './mock';

// 用mock拦截对应的请求地址，并发送返回数据对象
const configRes = Mock.mock('/api/abin/blog/config', 'get', config);
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
};
