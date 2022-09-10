import "antd/dist/antd.css";
import React, { useState } from "react";
import { UsbOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Divider, Row, Table } from "antd";

import { TableColumns } from "./Helper";
import styles from "./index.module.scss";

const ProfilePage = (props) => {
  const [eventsList, setEventsList] = useState([]);

  return (
    <Row className={styles.profile_settings}>
      <Col
        xs={{ span: 12, offset: 6 }}
        sm={{ span: 14, offset: 5 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 18, offset: 3 }}
        xl={{ span: 20, offset: 2 }}
      >
        <h1 className={styles.h1}>My Profile</h1>

        <Card className={styles.card} bordered={false}>
          <section className={styles.card_avator}>
            <Avatar
              // src={}
              icon={<UsbOutlined />}
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            />
          </section>

          <section className={styles.card_info}>
            <div>
              <h4>Username</h4>
              {/* <p>{}</p> */}
            </div>

            <div>
              <h4>Email Address</h4>
              {/* <p>{}</p> */}
            </div>
          </section>
        </Card>
        <Divider />
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
