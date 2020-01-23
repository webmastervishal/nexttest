import { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Logo, IconX, SiderX, MenuItemX, Span, ContentX } from './style';
const { Header, Footer } = Layout;

const MasterLayout = (props) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <SiderX trigger={null} collapsible collapsed={collapsed}>
                <Logo>
                    <img src="/images/logo.png" width="40px" height="40px" />
                    {!collapsed && <Span htmlFor="logo">AttainU</Span>}
                </Logo>
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
                <Header style={{ background: '#fff', padding: 0, boxShadow: '0 10px 30px 0 rgba(82,63,105,.08)' }}>
                    <IconX
                        className="trigger"
                        type="menu"
                        onClick={() => setCollapsed(!collapsed)}
                        htmlFor="togglemenu"
                    />
                </Header>
                <ContentX>
                    {props.children}
                </ContentX>

                <Footer style={{ textAlign: 'center' }}>AttainU ©2020</Footer>
            </Layout>

        </Layout>
    );
}


export default MasterLayout;