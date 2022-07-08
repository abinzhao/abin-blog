import React from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './routers';

const Router = () => {
    function Routes() {
        const routes = useRoutes(routers);
        return routes;
    }

    return <Routes />;
};

export default Router;
