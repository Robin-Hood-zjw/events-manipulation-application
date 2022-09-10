import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Image, Layout, Menu } from "antd";

import "./Sider.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import styles from "./index.module.scss";

const { Sider } = Layout;

const SiderArea = (props) => {
  // let navigate = useNavigate();
  const selectedKey = useLocation().pathname;

  const highlight = () => {
    if (selectedKey === "/") {
      return ["1"];
    } else if (selectedKey === "/page2") {
      return ["2"];
    }
  };

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <Image className={styles.logo} src={"/img/logo.png"} />

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={highlight()}
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "Events",
            label: "Events",
            icon: <UserOutlined />,
            onClick: () => <Navigate to={"/"} />,
          },
          {
            key: "Create Event",
            label: "Create Event",
            icon: <VideoCameraOutlined />,
            onClick: () => <Navigate to={"/create-event"} />,
          },
          {
            key: "Profile",
            label: "Profile",
            icon: <UploadOutlined />,
            onClick: () => <Navigate to={"/profile"} />,
          },
        ]}
      />
    </Sider>
  );
};

export default SiderArea;
