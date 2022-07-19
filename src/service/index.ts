import { request } from '@/utils/axios/axios';

export const config = (params: any) => {
    return request('/api/abin/blog/config', params, 'GET');
};
export const Article = (params: any) => {
    return request('/api/abin/blog/search', params, 'POST');
};
export const DetailsReq = (params: any) => {
    return request('/api/abin/blog/detail', params, 'POST');
};
