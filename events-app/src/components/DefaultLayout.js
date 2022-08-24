import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";

import "../index.css";
import "antd/dist/antd.css";
import MainArea from "./Typography/MainArea/MainAreaRouters";
import SiderArea from "./Typography/SiderArea/SiderArea";
import HeaderArea from "./Typography/HeaderArea/HeaderArea";

const { Header, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <SiderArea />

      <Layout className="site-layout">
        <HeaderArea />

        <MainArea />
      </Layout>
    </Layout>
  );
};

export default App;
