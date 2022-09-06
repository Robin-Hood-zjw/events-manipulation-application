import { DownOutlined, SearchOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import React, { useState } from 'react';

const CommentsSearch = () => {
    const [isContentVisible, setContentVisible] = useState(false);

    toggleContentVisible = () => {
        setContentVisible(!isContentVisible);
    };

    return (
        <>
            <div>
                <Button onClick={toggleContentVisible}>
                    <SearchOutlined />
                    {isContentVisible ? <UpOutlined /> : <DownOutlined/>}
                </Button>
            </div>

            <div>
                <Form></Form>
            </div>

            <div>
                <Form.Item>
                    <Button></Button>
                    <Button></Button>
                </Form.Item>
            </div>
        </>
    );
}

export default CommentsSearch;