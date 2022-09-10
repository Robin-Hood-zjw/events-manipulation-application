import { Avatar, List, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";

import { IconArea, sortImgType, getAvgRate } from "./helpersFunc";
import { fetchEventsData } from "../../../Data/EventsData/EventsData";
import { Link } from "react-router-dom";
import { compose } from "redux";

const CommentsArea = (props) => {
  const [eventsList, setEventsList] = useState([]);
  let results = "";

  const fetchEventsAPI = async () => {
    const res = await fetchEventsData();
    setEventsList(res);
  };

  const onClickEvent = () => {
    console.log("I am here.");
  };

  useEffect(() => {
    results = fetchEventsAPI();
  }, []);

  return (
    <List
      size="large"
      itemLayout="vertical"
      pagination={{
        pageSize: 3,
      }}
      dataSource={eventsList}
      footer={<div>Let's meet up!</div>}
      renderItem={(item) => (
        <List.Item
          key={item.eventId}
          actions={[
            <Rate
              disabled
              allowHalf
              defaultValue={3}
              value={getAvgRate(item.rate)}
            />,

            <IconArea
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,

            <IconArea
              icon={MessageOutlined}
              text={item.rate.length}
              key="list-vertical-message"
            />,
          ]}
          extra={sortImgType(item)}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={
              <Link to={`/events/${item.eventId}`} onClick={onClickEvent}>
                {item.title}
              </Link>
            }
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default CommentsArea;
