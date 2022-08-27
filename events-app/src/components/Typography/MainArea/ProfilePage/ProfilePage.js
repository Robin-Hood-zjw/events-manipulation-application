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
      <Col>
        <h1>My Profile</h1>
        <Card
          bordered={false}
          style={{
            width: 500,
          }}
        >
          <section
            style={{
              margin: "20px auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar size={{ xs: 80, md: 90, lg: 200 }} icon={<UsbOutlined />} />
          </section>

          <section style={{ display: "flex", justifyContent: "space-around" }}>
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
      <Col>
        <h1>My Events</h1>
        <section>
          <Table columns={TableColumns} dataSource={eventsList} />
        </section>
      </Col>
    </Row>
  );
};

export default ProfilePage;
