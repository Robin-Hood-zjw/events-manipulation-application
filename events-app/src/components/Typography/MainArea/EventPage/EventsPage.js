import moment from "moment";
import React, { useState } from "react";
import { Calendar, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";

import CommentsArea from "./package/CommentsArea";
import second from "../../../Data/EventsData/EventsData";

const EventsPage = () => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  const onDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <>
      {/* <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      > */}
      <Row>
        <Col lg={20} md={18} sm={15}>
          <CommentsArea date={date} />
        </Col>
        <Col lg={22} md={18} sm={16}>
          <Calendar fullscreen={false} onPanelChange={onDateChange} />
        </Col>
      </Row>
      {/* </Content> */}
    </>
  );
};

export default EventsPage;
