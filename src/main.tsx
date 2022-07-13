import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import '@/locales/i18n';
import { Layout } from '@/components';
import { ViewportProvider } from '@/utils/viewportContext';
import { BrowserRouter } from 'react-router-dom';
import '../mock/index';
import { ConfigContextProvider } from './utils/configContext';
import 'animate.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigContextProvider>
            <ViewportProvider>
                <BrowserRouter>
                    <Layout>
                        <Router />
                    </Layout>
                </BrowserRouter>
            </ViewportProvider>
        </ConfigContextProvider>
    </React.StrictMode>,
);
