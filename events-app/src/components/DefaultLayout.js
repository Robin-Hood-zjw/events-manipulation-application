import { Layout } from "antd";
import React, { useState } from "react";

import "../index.css";
import "antd/dist/antd.css";
import MainArea from "./Typography/MainAreaRouters";
import SiderArea from "./Typography/SiderArea/SiderArea";
import HeaderArea from "./Typography/HeaderArea/HeaderArea";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SiderArea collapsed={collapsed} />

      <Layout className="site-layout">
        <HeaderArea toggle={toggle} collapsed={collapsed} />
        <MainArea />
      </Layout>
    </Layout>
  );
};

export default App;
