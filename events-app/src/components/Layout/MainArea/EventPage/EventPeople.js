import React from "react";
import "antd/dist/antd.css";
import { Badge, Card } from "antd";

const { Ribbon } = Badge;

const EventPeople = (props) => {
  const { hosts } = props;
  return (
    <div>
      <Card>
        <section>
          <Ribbon>
            <img
              src={hosts && hosts[0].photoUrl}
              alt={hosts && hosts[0].name}
            />
            {hosts && hosts[0].name}
          </Ribbon>
        </section>
      </Card>
    </div>
  );
};

export default EventPeople;
