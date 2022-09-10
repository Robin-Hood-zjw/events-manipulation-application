import React from "react";
import { Row, Col, Card, Pagination } from "antd";
import Meta from "antd/lib/card/Meta";
import { UserOutlined } from "@ant-design/icons";

const AttendeesPage = () => {
  // listAttemdees = () => {
  //   return (
  //     <Col>
  //       <Card>
  //         <Meta />
  //       </Card>
  //     </Col>
  //   );
  // };

  return (
    <>
      <Row>
        <Col>
          <h1>All Attendees</h1>
        </Col>
      </Row>

      <Row>
        {/* {attendees.map((attendee) => {
          return (
            <Col>
              <Card
                cover={
                  attendee.url ? <img src={attendee.url} /> : <UserOutlined />
                }
              >
                <Meta
                  title={attendee.name}
                  description={
                    <a href={`mailto: ${attendee.email}`}>{attendee.email}</a>
                  }
                />
              </Card>
            </Col>
          );
        })} */}
      </Row>

      <Row>
        <Col>
          <div>
            <Pagination />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AttendeesPage;
