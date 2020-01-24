import { useState, useEffect } from 'react';
import { Layout, Menu, Row, Col, Dropdown, Icon } from 'antd';
import Link from 'next/link';

import Image from './../UIElements/image';
import { Logo, IconX, SiderX, MenuItemX, Span, ContentX, HeaderX, UserProfile } from './style';
const { Footer } = Layout;


const dropdownmenu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">
                <Icon type="user" /> Profile
            </a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="#">
                <Icon type="setting" /> Change Password
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            <a href="#">
                <Icon type="logout" /> Logout
            </a>
        </Menu.Item>
    </Menu>
);

const MasterLayout = (props) => {

    const [collapsed, setCollapsed] = useState(false);
    const [vw, setVW] = useState(0);

    useEffect(() => {
        window.screen.width <= 992 ? setCollapsed(true) : setCollapsed(false);
        setVW(window.screen.width);
    }, []);

    return (
        <Layout>
            <SiderX trigger={null} collapsible collapsed={collapsed}>
                <Link href="/">
                    <Logo>
                        <Image src="/images/logo.png" width="40px" height="40px" />
                        {!collapsed && <Span htmlFor="logo">AttainU</Span>}
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
                    <Row>
                        <Col lg={18} md={12} xs={16}>
                            <IconX
                                className="trigger"
                                type="menu"
                                onClick={() => setCollapsed(!collapsed)}
                                htmlFor="togglemenu"
                            />
                        </Col>
                        <Col lg={6} md={12} xs={8}>
                            <Dropdown overlay={dropdownmenu} trigger={['click']}>
                                <UserProfile href="#" >
                                    <IconX htmlFor="usericon" type="user" />
                                    {vw > 992 && <Span htmlFor="user">Vishal Shetty</Span>}
                                </UserProfile>
                            </Dropdown>
                        </Col>
                    </Row>
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