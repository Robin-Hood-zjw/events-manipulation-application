import moment from "moment";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Calendar, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";

import styles from "./index.module.scss";
import CommentsArea from "./CommentsArea";
import { fetchEventsData } from "../../../Data/EventsData/EventsData";

const EventsPage = () => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  const onDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <Content className={styles.site_layout_background}>
      <Row>
        <Col lg={10} md={24} sm={24}>
          <CommentsArea date={date} />
        </Col>
        <Col lg={10} md={24} sm={24}>
          <Calendar fullscreen={false} onPanelChange={onDateChange} />
        </Col>
      </Row>
    </Content>
  );
};

export default EventsPage;
