import React from "react";
import { Row, Col, Card } from "antd";
import Meta from "antd/lib/card/Meta";

const AttendeesPage = () => {
    listAttemdees = () => {
        return (
        <Col >
            <Card>
                <Meta/>
            </Card>
        </Col>);
    }

    // {attendeesByPage.map((attendee) => {
    //     return (
    //       <Col sm={24} md={12} lg={8} xl={6} xxl={4}>
    //         <Card
    //           style={{ width: 220, marginBottom: 20 }}
    //           cover={
    //             attendee.photoURL ? (
    //               <img alt={attendee.name} src={attendee.photoURL} />
    //             ) : (
    //               <UserOutlined style={{ fontSize: "220px" }} />
    //             )
    //           }
    //         >
    //           <Meta
    //             title={attendee.name}
    //             description={
    //               <a href={`mailto:${attendee.email}`}>{attendee.email}</a>
    //             }

    return (
    <>
        <Row>
            <Col>
                <h1>All Attendees</h1>
            </Col>
        </Row>

        <Row></Row>
    </>
    );
}

export default AttendeesPage;