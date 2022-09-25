import { Layout } from "antd";
import React, { useState } from "react";

import "../index.css";
import "antd/dist/antd.css";
import MainArea from "./Layout/MainAreaRouters";
import SiderArea from "./Layout/SiderArea/SiderArea";
import HeaderArea from "./Layout/HeaderArea/HeaderArea";
import { BrowserRouter } from "react-router-dom";

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <BrowserRouter>
      <Layout>
        <SiderArea collapsed={collapsed} />

        <Layout style={{ minHeight: "100vh" }} className="site-layout">
          <HeaderArea toggle={toggle} collapsed={collapsed} />
          <MainArea />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default PageLayout;
