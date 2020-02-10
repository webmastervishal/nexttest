import { useState, useEffect } from "react";
import { Layout, Menu, Row, Col, Dropdown, Icon } from "antd";
import Link from "next/link";
import { useRouter, Router } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Image from "./../UIElements/image";
import {
  Logo,
  IconX,
  SiderX,
  MenuItemX,
  Span,
  ContentX,
  HeaderX,
  UserProfile
} from "./style";

const { Footer } = Layout;

const GET_SIDEBAR = gql`
  {
    sidebar @client
  }
`;

const dropdownmenu = (
  <Menu>
    <Menu.Item key="0">
      <Link href="/profile/[id]" as="/profile/1">
        <a>
          <Icon type="user" /> Profile
        </a>
      </Link>
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


const MasterLayout = props => {
  const { data } = useQuery(GET_SIDEBAR);
  console.log('data', data);
  const [collapsed, setCollapsed] = useState(false);
  const [vw, setVW] = useState(0);
  const [menuitem, setMenuItem] = useState("1");
  const router = useRouter();

  useEffect(() => {
    window.screen.width <= 992 ? setCollapsed(true) : setCollapsed(false);
    setVW(window.screen.width);
  }, []);

  const handleMenuClick = (key) => {
    setMenuItem(key.key);
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <SiderX trigger={null} collapsible collapsed={collapsed}>
        <Link href="/">
          <Logo>
            <Image src="/images/logo.png" width="40px" height="40px" />
            {!collapsed && <Span htmlFor="logo">AttainU</Span>}
          </Logo>
        </Link>
        <Menu
          mode="inline"
          defaultSelectedKeys={[menuitem]}
          style={{ backgroundColor: "#123c69" }}
        >
          <MenuItemX key="1" onClick={handleMenuClick}>
            <Link href="/dashboard">
              <div>
                <IconX type="home" theme="filled" htmlFor="menuicon" />
                <Span htmlFor="menuitem">Dashboard</Span>
              </div>
            </Link>
          </MenuItemX>
          <MenuItemX key="2" onClick={handleMenuClick}>
            <Link href="/students">
              <div>
                <IconX type="user" themed="filled" htmlFor="menuicon" />
                <Span htmlFor="menuitem">Students</Span>

              </div>
            </Link>
          </MenuItemX>
          <MenuItemX key="3" onClick={handleMenuClick}>
            <Link href="/batches">
              <div>
                <IconX type="book" themed="book" htmlFor="menuicon" />
                <Span htmlFor="menuitem">Batches</Span>

              </div>
            </Link>
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
              <Dropdown overlay={dropdownmenu} trigger={["click"]}>
                <UserProfile href="#">
                  <IconX htmlFor="usericon" type="user" />
                  {vw > 992 && <Span htmlFor="user">Vishal Shetty</Span>}
                </UserProfile>
              </Dropdown>
            </Col>
          </Row>
        </HeaderX>
        <ContentX>{props.children}</ContentX>

        <Footer style={{ textAlign: "center" }}>AttainU ©2020</Footer>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;
