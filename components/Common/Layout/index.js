import { useState, useEffect } from "react";
import { Layout, Menu, Row, Col, Dropdown, Icon, } from "antd";
import Link from "next/link";
import { useQuery, useMutation } from '@apollo/react-hooks';

import { GET_MENUITEM, UPDATE_MENUITEM } from './../../../apollo/queries';
import Image from "./../UIElements/image";
import {
  Logo,
  IconX,
  SiderX,
  MenuItemX,
  SubMenuX,
  Span,
  ContentX,
  HeaderX,
  UserProfile
} from "./style";

const { Footer } = Layout;

const dropdownmenu = (
  <Menu>
    <Menu.Item key="0">
      <Link href="/profile/[id]" as="/profile/1">
        <a>
          <Icon type="user" /> Profile
        </a>
      </Link>
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
  const { data } = useQuery(GET_MENUITEM);
  const [updateMenuitem] = useMutation(UPDATE_MENUITEM);
  const [collapsed, setCollapsed] = useState(false);
  const [vw, setVW] = useState(0);
  const { menuitem } = data;

  useEffect(() => {
    window.screen.width <= 992 ? setCollapsed(true) : setCollapsed(false);
    setVW(window.screen.width);
  }, []);

  const handleMenuClick = (key) => {
    updateMenuitem({ variables: { menuitem: key.key } });
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

          <SubMenuX
            key="3"
            title={
              <Span>
                <IconX type="book" themed="book" htmlFor="menuicon" />
                <Span htmlFor="menuitem">Batches</Span>

              </Span>
            }
          >
            <MenuItemX key="31" onClick={handleMenuClick}>
              <Link href="/batch/[id]" as="/batch/1">
                <div>
                  <IconX type="usergroup-add" themed="usergroup-add" htmlFor="menuicon" />
                  <Span htmlFor="menuitem">Woodpecker</Span>

                </div>
              </Link>
            </MenuItemX>

            <MenuItemX key="32" onClick={handleMenuClick}>
              <Link href="/batch/[id]" as="/batch/2">
                <div>
                  <IconX type="usergroup-add" themed="usergroup-add" htmlFor="menuicon" />
                  <Span htmlFor="menuitem">Robin</Span>

                </div>
              </Link>
            </MenuItemX>

          </SubMenuX>
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
