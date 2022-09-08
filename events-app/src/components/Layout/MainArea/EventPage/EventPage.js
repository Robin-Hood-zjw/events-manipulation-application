import React from "react";
import { Col, Row } from "antd";

import EventJoin from "./EventJoin";
import EventChat from "./EventChat";
import EventInfo from "./EventInfo";
import EventPeople from "./EventPeople";

const EventPage = (props) => {
  const { events, hosts, eventLoading, hostsLoading, user } = props;

  return (
    <Row style={{ maxWidth: "1000px" }}>
      <Col span={20}>
        {/* Join this event */}
        <Row>
          <Col>
            <EventJoin
              user={user}
              hosts={hosts}
              events={events}
              eventLoading={eventLoading}
              hostsLoading={hostsLoading}
            />
          </Col>
        </Row>

        {/* Chat about this event */}
        <Row>
          <Col>
            <EventInfo
              hosts={hosts}
              events={events}
              eventLoading={eventLoading}
              hostsLoading={hostsLoading}
            />
          </Col>
        </Row>

        {/* Chat about this event */}
        <Row>
          <Col>
            <EventChat
              user={user}
              hosts={hosts}
              events={events}
              eventLoading={eventLoading}
              hostsLoading={hostsLoading}
            />
          </Col>
        </Row>
      </Col>

      {/* People involved into this event */}
      <Col>
        <EventPeople
          hosts={hosts}
          events={events}
          eventLoading={eventLoading}
          hostsLoading={hostsLoading}
        />
      </Col>
    </Row>
  );
};

export default EventPage;
