import styled from 'styled-components';
import { Icon, Layout } from 'antd';

const { Sider } = Layout;

const Logo = styled.div`
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
`;

const IconX = styled(Icon)`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    :hover {
        color: #1890ff;
    }
`;

const SiderX = styled(Sider)`
    height: 100vh;
`;

export {
    Logo,
    IconX,
    SiderX
};