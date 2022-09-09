import React from "react";
import moment from "moment";
import { Avatar, Button } from "antd";
import {
  CalendarOutlined,
  CompassOutlined,
  InfoOutlined,
  UserOutlined,
} from "@ant-design/icons";

const EventInfo = (props) => {
  const { events } = props;

  return (
    <div>
      <div>
        <section>
          <div>
            <InfoOutlined />
          </div>
          <div>
            <p>{events && events[0].description}</p>
          </div>
        </section>

        <section>
          <div>
            <CalendarOutlined />
          </div>
          <div>{moment(events && events[0].date).format("YYYY-MM-DD")}</div>
        </section>

        <section>
          <div>
            <CompassOutlined />
          </div>
          <div>{events && events[0].value}</div>
          <div>
            <Button>{this.state.showMap ? "Hide Map" : "Show Map"}</Button>
          </div>
        </section>
      </div>

      {/* {this.state.showMap && (
        <div>
          <MyMapComponent />
        </div>
      )} */}

      <section>
        <div>Who's coming?</div>
        <div>
          {events &&
            events[0].attendees.slice(0, 5).map((attendee) => {
              return (
                <Avatar
                  src={attendee.url}
                  icon={!attendee.photoURL && <UserOutlined />}
                />
              );
            })}
          {events && <Button>See more</Button>}
        </div>
      </section>
    </div>
  );
};

export default EventInfo;
