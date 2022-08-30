import "antd/dist/antd.css";
import React, { useState } from "react";
import { UsbOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Divider, Row, Table } from "antd";

import { TableColumns } from "./package/Helper";

const ProfilePage = () => {
  const [eventsList, setEventsList] = useState([]);

  return (
    <Row
      style={{
        background: "#fff",
        margin: "20px 25px",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <Col
        xs={{ span: 12, offset: 6 }}
        sm={{ span: 14, offset: 5 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 18, offset: 3 }}
        xl={{ span: 20, offset: 2 }}
      >
        <h1 style={{ margin: "10px auto" }}>My Profile</h1>

        <Card bordered={false}>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px auto",
            }}
          >
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={<UsbOutlined />}
            />
          </section>

          <section
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h4>Username</h4>
              <p>{}</p>
            </div>

            <div>
              <h4>Email Address</h4>
              <p>{}</p>
            </div>
          </section>
        </Card>
      </Col>

      <Divider />

      <Col
        xs={{ span: 12, offset: 6 }}
        sm={{ span: 14, offset: 5 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 18, offset: 3 }}
        xl={{ span: 20, offset: 2 }}
      >
        <h1>My Events</h1>

        <section>
          <Table columns={TableColumns} dataSource={eventsList} />
        </section>
      </Col>
    </Row>
  );
};

export default ProfilePage;
