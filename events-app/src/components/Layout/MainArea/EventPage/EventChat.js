import { Avatar, Button, Form, Input } from 'antd';
import React, { useState } from 'react';

const { Item } = Form;
const { TextArea } = Input;

const Editor = ({value, onChange, onSubmit}) => (
    <>
        <Item>
            <TextArea value={value} oncChange={onChange} />
        </Item>

        <Item>
            <Button 
                type='primary'
                htmlType='submit'
                onClick={onSubmit}
            >
                Add Comment
            </Button>
        </Item>
    </>
);

const EventChat = (props) => {
    const [ value, setValue ] = useState('');

    handleEdit = (event) => setValue(event.target.value);
    handleSubmit = () => {
        if(!value) return;
        setValue('');
    };

    return (
        <div>
            <div>
                Chat about this event
            </div>

            <div>

            </div>

            <Comment 
                avatar={<Avatar />}
                content={
                    <Editor
                        value = {value}
                        onChange={handleEdit}
                        onSubmit={handleSubmit}
                    />
                }
            />
        </div>
    );
}

export default EventChat;