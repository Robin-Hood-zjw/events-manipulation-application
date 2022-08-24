import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import React, { useState } from "react";

import "../index.css";
import "antd/dist/antd.css";
import MainArea from "./Typography/MainArea/MainAreaRouters";
import SiderArea from "./Typography/SiderArea/SiderArea";
import HeaderArea from "./Typography/HeaderArea/HeaderArea";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <SiderArea collapsed={collapsed} />

      <Layout className="site-layout">
        <HeaderArea toggle={} collapsed={collapsed} />

        <MainArea />
      </Layout>
    </Layout>
  );
};

export default App;
