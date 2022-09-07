import { UserOutlined } from '@ant-design/icons';
import { Avatar, Comment, Divider, List } from 'antd';
import moment from 'moment';
import React from 'react';

const CommentsArea = (props) => {
    const { comments } = props;

    return (
        <div>
            <List
                dataSource={comments}
                itemLayout='horizontal'
                pagination={{ pageSize: 10, }}
                renderItem={(item) => {
                    <>
                        <Comment
                            author={item.author}
                            content={item.content}
                            datetime={moment(item.time).format('YYYY-MM-DD')}
                            avatar={
                                <Avatar 
                                    src={item.url}
                                    alt={item.info}
                                    icon={!item.icon && <UserOutlined />} 
                                />
                            } 
                        />
                        <Divider />
                    </>
                }}
            />
        </div>
    );
}

export default CommentsArea;