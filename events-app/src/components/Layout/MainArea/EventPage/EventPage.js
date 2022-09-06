import React from 'react';
import { Col, Row } from 'antd';

import EventJoin from './EventJoin'
import EventChat from './EventChat';
import EventInfo from './EventInfo';
import EventPeople from './EventPeople';

const EventPage = () => {
    return (
        <Row>
            <Col>
                {/* Join this event */}
                <Row>
                    <Col>
                        <EventJoin />
                    </Col>
                </Row>

                {/* Chat about this event */}
                <Row>
                    <Col>
                        <EventChat />
                    </Col>
                </Row>

                {/* Chat about this event */}
                <Row>
                    <Col>
                        <EventInfo />
                    </Col>
                </Row>

                {/* People involved into this event */}
                <Row>
                    <Col>
                        <EventPeople />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default EventPage;
