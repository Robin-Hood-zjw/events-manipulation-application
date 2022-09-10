import React, { useState } from "react";
import { Option } from "antd/lib/mentions";
import { Col, Row, DatePicker, Form, Input, Select, Button } from "antd";

import styles from "./index.module.scss";

const CreateEventPage = () => {
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");

  return (
    <Row className={styles.settings}>
      <Col>
        <h1>Create New Event</h1>
        <Form>
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: "Please input an event's name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please input some descriptions!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="category"
            label="Category"
            rules={[
              {
                required: true,
                message: "Please choose a event type!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
                message: "Please choose a city!",
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="seattle">Seattle</Option>
              <Option value="LA">Los Angles</Option>
              <Option value="bosten">Bosten</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="venue"
            label="Venue"
            rules={[
              {
                required: true,
                message: "Please choose a venue!",
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="seattle">Seattle</Option>
              <Option value="LA">Los Angles</Option>
              <Option value="bosten">Bosten</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="datepicker"
            label="DatePicker"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateEventPage;
