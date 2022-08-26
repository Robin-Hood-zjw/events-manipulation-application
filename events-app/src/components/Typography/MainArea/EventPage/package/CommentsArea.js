import { Avatar, List, Rate } from "antd";
import React, { useEffect } from "react";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";

import { IconArea, sortImgType, getAvgRate } from "./Helpers";
import { fetchEventsData } from "../../../../Data/EventsData/EventsData";
import { date } from "faker/lib/locales/az";

const CommentsArea = (props) => {
  let eventsData = "";
  // eventsData = fetchEventsData({ date: date });

  useEffect(() => {
    eventsData = fetchEventsData({ date: date });
  }, [props.date]);

  return (
    <List
      size="large"
      itemLayout="vertical"
      pagination={{
        pageSize: 3,
      }}
      dataSource={eventsData}
      footer={
        <div>
          <b>Let's meet up!</b>
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <Rate disabled allowHalf value={getAvgRate(item.rate)} />,

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
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default CommentsArea;
