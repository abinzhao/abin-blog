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
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import { LocaleProvider } from '@douyinfe/semi-ui';
import Cookies from 'js-cookie';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigContextProvider>
            <ViewportProvider>
                <BrowserRouter>
                    <LocaleProvider
                        locale={Cookies.get('i18next') == 'zh' ? zh_CN : en_US}
                    >
                        <Layout>
                            <Router />
                        </Layout>
                    </LocaleProvider>
                </BrowserRouter>
            </ViewportProvider>
        </ConfigContextProvider>
    </React.StrictMode>,
);
