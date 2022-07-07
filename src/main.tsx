import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './routes';
import 'antd/dist/antd.css';
import '@/locales/i18n';
import { Layout } from '@/components';
import { ViewportProvider } from '@/utils/viewportContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ViewportProvider>
            <Layout>
                <Router />
            </Layout>
        </ViewportProvider>
    </React.StrictMode>,
);
