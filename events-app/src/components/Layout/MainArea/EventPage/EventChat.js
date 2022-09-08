import React, { useState } from "react";
import { Avatar, Button, Form, Input } from "antd";

import CommentsArea from "./CommentsArea";

const { Item } = Form;
const { TextArea } = Input;

const Editor = ({ value, onChange, onSubmit }) => (
  <>
    <Item>
      <TextArea value={value} oncChange={onChange} />
    </Item>

    <Item>
      <Button type="primary" htmlType="submit" onClick={onSubmit}>
        Add Comment
      </Button>
    </Item>
  </>
);

const EventChat = (props) => {
  const [value, setValue] = useState("");

  handleEdit = (event) => setValue(event.target.value);
  handleSubmit = () => {
    if (!value) return;
    setValue("");
  };
  handleLoadMore = () => {};

  return (
    <div>
      <div>Chat about this event</div>
      <div>
        {events && events.length > 0 && events[0].comments.length > 10 && (
          <div>
            <CommentsArea />
          </div>
        )}

        <div>
          <Button type="primary" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>

        <Comment
          avatar={<Avatar src={} icon={} alt={} />}
          content={
            <Editor
              value={value}
              onChange={handleEdit}
              onSubmit={handleSubmit}
            />
          }
        />
      </div>
    </div>
  );
};

export default EventChat;
