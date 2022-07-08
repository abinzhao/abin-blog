import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './routes';
import 'antd/dist/antd.css';
import '@/locales/i18n';
import { Layout } from '@/components';
import { ViewportProvider } from '@/utils/viewportContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ViewportProvider>
            <BrowserRouter>
                <Layout>
                    <Router />
                </Layout>
            </BrowserRouter>
        </ViewportProvider>
    </React.StrictMode>,
);
