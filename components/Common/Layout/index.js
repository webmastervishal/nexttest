import { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link';

import { Logo, IconX, SiderX, MenuItemX, Span, ContentX, HeaderX } from './style';
const { Footer } = Layout;

const MasterLayout = (props) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <SiderX trigger={null} collapsible collapsed={collapsed}>
                <Link href="/">
                    <Logo>
                        <img src="/images/logo.png" width="40px" height="40px" />
                        {!collapsed && <Span for="logo">AttainU</Span>}
                    </Logo>
                </Link>
                <Menu mode="inline" defaultSelectedKeys={['1']} style={{ backgroundColor: '#123c69' }}>
                    <MenuItemX key="1">
                        <IconX type="user" htmlFor="menuicon" />
                        <Span htmlFor="menuitem">Dashboard</Span>
                    </MenuItemX>
                    <MenuItemX key="2">
                        <IconX type="video-camera" htmlFor="menuicon" />
                        <Span htmlFor="menuitem">Users</Span>
                    </MenuItemX>
                    <MenuItemX key="3">
                        <IconX type="upload" htmlFor="menuicon" />
                        <Span htmlFor="menuitem">Batches</Span>
                    </MenuItemX>
                </Menu>
            </SiderX>
            <Layout>
                <HeaderX>
                    <IconX
                        className="trigger"
                        type="menu"
                        onClick={() => setCollapsed(!collapsed)}
                        htmlFor="togglemenu"
                    />
                </HeaderX>
                <ContentX>
                    {props.children}
                </ContentX>

                <Footer style={{ textAlign: 'center' }}>AttainU ©2020</Footer>
            </Layout>

        </Layout>
    );
}


export default MasterLayout;