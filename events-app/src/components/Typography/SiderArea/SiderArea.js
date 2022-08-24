import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const SiderArea = (props) => {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <image src="" alt="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Events",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "Create Event",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Profile",
          },
        ]}
      />
    </Sider>
  );
};

export default SiderArea;
