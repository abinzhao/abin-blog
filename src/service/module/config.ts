// import request from '../../utils/axios';
import axios from 'axios';

/**
 * 页面信息
 */

export const config = (data: any) => {
    return axios.post('/api/abin/blog/config');
};
