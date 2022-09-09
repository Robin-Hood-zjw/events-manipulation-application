import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Image, Layout, Menu } from "antd";

import "./Sider.css";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const { Sider } = Layout;

const menuItems = [
  {
    key: "Events",
    icon: <UserOutlined />,
    label: "Events",
  },
  {
    key: "Create Event",
    icon: <VideoCameraOutlined />,
    label: "Create Event",
  },
  {
    key: "Profile",
    icon: <UploadOutlined />,
    label: "Profile",
  },
];

const SiderArea = (props) => {
  const onClickMenu = (event) => {
    switch (event.key) {
      case "Events":
      case "Create-Events":
      case "Profile":
    }
  };

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <Image className={styles.logo} src={"/img/logo.png"} />

      <Menu
        theme="dark"
        mode="inline"
        items={menuItems}
        onClick={onClickMenu}
      />
    </Sider>
  );
};

export default SiderArea;
