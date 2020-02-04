import styled, { css, createGlobalStyle } from 'styled-components';
import { Icon, Layout, Menu } from 'antd';

import media from './../media';

const { Item } = Menu;
const { Sider, Content, Header } = Layout;

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

const user = css`
    font-size: 16px;
`;

const Span = styled.span`
    ${props => props.htmlFor === 'logo' && logotext};
    ${props => props.htmlFor === 'menuitem' && menuitem};
    ${props => props.htmlFor === 'user' && user};
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

const usericon = css`
    padding: 5px;
    border-radius: 50%;
    border: 1px solid #123c69;
    margin: 5px;
    font-weight: bold;

    :hover {
        background-color: #123c69;
        color: #ffb300;
    }
`;

const IconX = styled(Icon)`
    ${props => props.htmlFor === 'menuicon' && menuicon};
    ${props => props.htmlFor === 'togglemenu' && togglemenu};
    ${props => props.htmlFor === 'usericon' && usericon};
`;

const SiderX = styled(Sider)`
    height: 100vh;
    background-color: #123c69;
    flex: 0 0 250px !important;
    max-width: none !important;
    min-width: none !important;


    &&&.ant-layout-sider-collapsed {
        flex: 0 0 80px !important;
    }


    ${media.mobile`
        flex: 0 0 200px !important;
        max-width: none !important;
        min-width: none !important;
    `}

    ${media.smalldevice`
        flex: 0 0 150px !important;
        max-width: none !important;
        min-width: none !important;
    `}

`;

const MenuItemX = styled(Item)`
    &&&.ant-menu-item-selected {
        background-color: #fbb300;
    },

    &&&.ant-menu-item::after {
       border-right: 3px solid #ffb300;
    }
`;

const ContentX = styled(Content)`
    margin: 24px 16px 0 16px;
    padding: 24px;
    background: #fff;
    min-height: 280;
    box-shadow: 0 0 13px 0 rgba(82,63,105,.1);
    border-radius: 4px;

    ${media.mobile`
      margin: 8px;
      padding: 12px;
    `}
`;

const HeaderX = styled(Header)`
    background: #fff;
    padding: 0;
    box-shadow: 0 10px 30px 0 rgba(82,63,105,.08);
`;

const UserProfile = styled.a`
    color: #000;
    height: 64px;
    display: block;
    text-align: right;
    padding-right: 20px;

    :hover {
        color: #000;
    }
`;

export {
  Logo,
  IconX,
  SiderX,
  MenuItemX,
  Span,
  ContentX,
  HeaderX,
  GlobalStyle,
  UserProfile
};
