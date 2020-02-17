import { Col, Button, Modal, Form, Input, DatePicker } from 'antd';
import { useState } from 'react';
import { RowX } from './../components/Common/UIElements';
import BatchCard from './../components/Common/BatchCard';
import MasterLayout from './../components/Common/Layout';

const batches = () => {
  const [visible, setVisible] = useState(false);
  return <MasterLayout>
    <RowX>
      <Col offset={22} span={2}>
        <Button type="primary" size="large" style={{ color: 'rgb(19, 60, 105)' }} onClick={() => setVisible(true)}> New Batch </Button>
        <Modal
          title="Add New Batch"
          visible={visible}
          onOk={() => setVisible(false)}
          okText="Add"
          onCancel={() => setVisible(false)}
        >
          <Form layout="vertical">
            <Form.Item label="Batch Name">
              <Input />
            </Form.Item>

            <Form.Item label="Start Date">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        </Modal>
      </Col>

    </RowX>
    <RowX>
      <Col span={24}>
        <BatchCard
          name="Eagle Batch"
          status="danger"
          startdate="1st Apr 2019"
        />
      </Col>
    </RowX>

    <RowX>
      <Col span={24}>
        <BatchCard
          name="Flamingo Batch"
          status="normal"
          startdate="1st Oct 2019"
        />
      </Col>
    </RowX>


    <RowX>
      <Col span={24}>
        <BatchCard
          name="Woodpecker Batch"
          status="normal"
          startdate="18th Nov 2019"
        />
      </Col>
    </RowX>

    <RowX>
      <Col span={24}>
        <BatchCard
          name="Robin Batch"
          status="danger"
          startdate="1st Jan 2020"
        />
      </Col>
    </RowX>
  </MasterLayout>

}


export default batches;
