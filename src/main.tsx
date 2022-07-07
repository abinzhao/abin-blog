import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './routes';
import 'antd/dist/antd.css';
import '@/locales/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
);
