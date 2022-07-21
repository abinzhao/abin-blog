import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },

    server: {
        port: 3001,
        proxy: {
            '/api': {
                target: 'https://api.inews.qq.com',
                changeOrigin: true,
                cookieDomainRewrite: '',
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/css/index.scss";',
            },
        },
    },
});
