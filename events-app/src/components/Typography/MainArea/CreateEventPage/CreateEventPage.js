import { Col, Row, DatePicker } from "antd";
import React from "react";

const CreateEventPage = () => {
  return (
    <Row>
      <Col>
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={this.onFinish}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
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
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.onCityChange}
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
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.onCityChange}
              allowClear
            >
              <Option value="seattle">Seattle</Option>
              <Option value="LA">Los Angles</Option>
              <Option value="bosten">Bosten</Option>
            </Select>
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>

          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>

          <Form.Item {...tailLayout}>
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
