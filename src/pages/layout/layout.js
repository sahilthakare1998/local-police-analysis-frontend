import React from "react";
import "antd/dist/antd.css";
import "./layout.css";
import { Layout, Menu, Breadcrumb } from "antd";

import Analytics from "../../components/landing/landing";
import {  Route, Switch,NavLink } from "react-router-dom";
import CrimeRate from "../../components/crimerate/crimerate";

const { Header, Content } = Layout;


class DashboardLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
              <NavLink to="/dashboard/crimerate">
                <span>Crime Rate</span>
              </NavLink>
              </Menu.Item>

              <Menu.Item key="2">
                <NavLink to="/dashboard/analytics">
                <span>Examine clearance VS offense categories</span>
              </NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: "#fff",
                }}
              >
                <Switch>
                  <Route path="/dashboard/analytics" exact>
                    <Analytics />
                  </Route>
                  <Route path="/dashboard/crimerate" exact>
                  <CrimeRate />
                  </Route>
                </Switch>
               
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default DashboardLayout;
