import React from "react";
import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import "./Header.css";

const { Header } = Layout;

const SiderArea = (props) => {
  return (
    <Header className="header-background header-layout">
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
        <Button className="popup-button" type="primary">
          Login
        </Button>
        <Button className="popup-button" type="primary">
          Sign Up
        </Button>
      </section>
    </Header>
  );
};

export default SiderArea;
