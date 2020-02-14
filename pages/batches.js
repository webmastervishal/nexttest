import { Col } from 'antd';
import { RowX } from './../components/Common/UIElements';
import BatchCard from './../components/Common/BatchCard';
import MasterLayout from './../components/Common/Layout';

export default () => <MasterLayout>

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
