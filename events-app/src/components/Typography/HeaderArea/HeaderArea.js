import React from "react";
import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const SiderArea = (props) => {
  return (
    <Header
      className="site-layout-background"
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

      <section>
        <div>
          <Button type="primary">Login</Button>
          <Button type="primary">Sign Up</Button>
        </div>
      </section>
    </Header>
  );
};

export default SiderArea;
