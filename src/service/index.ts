import { request } from '@/utils/axios/axios';
//网站配置信息
export const config = (params: any) => {
    return request('/api/abin/blog/config', params, 'GET');
};
//文章搜索
export const Article = (params: any) => {
    return request('/api/abin/blog/search', params, 'POST');
};
//文章详情
export const DetailsReq = (params: any) => {
    return request('/api/abin/blog/detail', params, 'POST');
};
// 疫情数据
// export const XGFY_YQ = () => {
//     return request(
//         '/api/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf',
//     );
// };
// 近期文章
export const JQArticle = (params: any) => {
    return request('/api/abin/blog/JQArticle', params, 'POST');
};
//IP以及天气与系统信息
// export const IPconfig = () => {
//     return request('https://api.vvhan.com/api/ip?s=""');
// };
// 天气接口
// https://api.66mz8.com/api/weather.php?location=深圳
// https://api.vvhan.com/api/ip?s=''
