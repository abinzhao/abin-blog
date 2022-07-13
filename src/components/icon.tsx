import React, { ReactNode } from 'React';
import {
    IconGithubLogo,
    IconWeibo,
    IconUserCardVideo,
    IconImage,
    IconArticle,
    IconHome,
} from '@douyinfe/semi-icons';

interface iconProps {
    [MapData: string]: ReactNode;
}

export const iconList: iconProps = {
    home: <IconHome size={'extra-large'} />,
    blog: <IconArticle size={'extra-large'} />,
    image: <IconImage size={'extra-large'} />,
    github: <IconGithubLogo size={'extra-large'} />,
    video: <IconUserCardVideo size={'extra-large'} />,
    weibo: <IconWeibo size={'extra-large'} />,
};
