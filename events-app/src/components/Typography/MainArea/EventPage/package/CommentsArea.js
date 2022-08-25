import { Avatar, List } from "antd";
import React, { useEffect } from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

import { IconArea, sortImgType } from "./Helpers";

const CommentsArea = (props) => {
  useEffect(() => {}, [props.date]);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 3,
      }}
      //   dataSource={data}
      footer={
        <div>
          <b>Let's meet up!</b>
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconArea
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,

            <IconArea
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,

            <IconArea
              icon={MessageOutlined}
              text="2"
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
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default CommentsArea;
