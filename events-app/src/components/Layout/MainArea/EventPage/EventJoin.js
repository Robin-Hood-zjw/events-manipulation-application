import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const { confirm } = Modal;

const EventJoin = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);

    onJoin = () => {
        confirm({
            title: 'Do you want to join?',
            centered: true,
        
            okText: 'Join',
            onOk() {
              console.log('OK');
            },
          });
    }

    onRate = () => setModalVisible(!isModalVisible);

    return (
        <div>
            <section>
                <p></p>
                <p></p>
                <p>Hosted by {}</p>
            </section>

            <section>
                <Button type='primary' onClick={onJoin}>JOIN THIS EVENT</Button>
                <Button type='primary' onClick={onRate}>RATE THIS EVENT</Button>
            </section>

            {/* Rate Modal */}
            <Modal>
                <Button type='primary'>Submit</Button>
            </Modal>
        </div>
    );
}

export default EventJoin;