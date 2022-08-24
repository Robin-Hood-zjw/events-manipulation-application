import React from "react";
import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const SiderArea = (props) => {
  return (
    <Header
      className="site-layout-background header-layout"
      style={{
        padding: 0,
      }}
    >
      <section>
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: props.toggle,
          }
        )}
      </section>

      <section className="buttons">
        <Button type="primary">Login</Button>
        <Button type="primary">Sign Up</Button>
      </section>
    </Header>
  );
};

export default SiderArea;
