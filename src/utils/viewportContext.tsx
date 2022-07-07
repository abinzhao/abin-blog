import React from 'react';

interface Viewport {
    width: number;
    height: number;
}

const viewportContext = React.createContext<Viewport>({ width: 0, height: 0 });

const ViewportProvider = ({ children }: any) => {
    // 顺带监听下高度，备用
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};

const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
};

export { ViewportProvider, useViewport };
