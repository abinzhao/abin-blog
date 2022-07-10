import { config } from '@/service';
import React from 'react';

const configContext = React.createContext<any>({});

const ConfigContextProvider = ({ children }: any) => {
    // 获取个人站点全局信息
    const [data, setData] = React.useState<any>({});
    const ConfigRes = async () => {
        const res: any = await config({});
        setData(res.data);
    };
    React.useEffect(() => {
        ConfigRes();
    }, []);

    return (
        <configContext.Provider value={data}>{children}</configContext.Provider>
    );
};

const useConfig = () => {
    const data = React.useContext(configContext);
    return data;
};

export { ConfigContextProvider, useConfig };
