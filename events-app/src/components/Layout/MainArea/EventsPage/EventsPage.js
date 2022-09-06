import moment from "moment";
import React, { useState } from "react";
import { Calendar, Col, Row } from "antd";

import styles from "./package/EventPage.scss";
import { Content } from "antd/lib/layout/layout";
import CommentsArea from "./package/CommentsArea";
import { fetchEventsData } from "../../../Data/EventsData/EventsData";

const EventsPage = () => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  onDateChange = (date) => {
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
