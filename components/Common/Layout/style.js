import styled, { css, createGlobalStyle } from 'styled-components';
import { Icon, Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0
    }
`;

const Logo = styled.div`
    height: 63px;
    padding: 6px;
    background-color: #123c69;
    text-align: center;
`;

const logotext = css`
    color: #ffb300;
    font-size: 24px;
    font-weight: 300;
    line-height: 50px;
    vertical-align: middle;
`;

const menuitem = css`
    color: #fff;
`;

const Span = styled.span`
    ${props => props.for === 'logo' ? logotext : menuitem}
`;
const menuicon = css`
    color: #fff;
`;

const togglemenu = css`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    :hover {
        color: #1890ff;
    }
`;

const IconX = styled(Icon)`
    ${props => props.for === 'menuicon' ? menuicon : togglemenu}
`;

const SiderX = styled(Sider)`
    height: 100vh;
    background-color: #123c69;
`;

const MenuItemX = styled(Menu.Item)`
    
`;

const ContentX = styled(Content)`
    margin: 24px 16px 0 16px;
    padding: 24px;
    background: #fff;
    min-height: 280;
    box-shadow: 0 0 13px 0 rgba(82,63,105,.1);
    border-radius: 4px;
`;


export {
    Logo,
    IconX,
    SiderX,
    MenuItemX,
    Span,
    ContentX,
    GlobalStyle
};