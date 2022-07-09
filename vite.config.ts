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
                target: 'http://127.0.0.1',
                changeOrigin: true,
                cookieDomainRewrite: '',
                secure: false,
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
