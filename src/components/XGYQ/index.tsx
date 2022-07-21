import { XGFY_YQ } from '@/service';
import React, { useEffect } from 'react';

const XGYQComponent: React.FC = () => {
    const XGYQ = async () => {
        const res = await XGFY_YQ({});
        console.log('res', res);
        return res;
    };

    useEffect(() => {
        XGYQ();
    }, []);
    return <>123</>;
};

export default XGYQComponent;
