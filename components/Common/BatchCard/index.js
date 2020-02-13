import { DatePicker, Row, Col, Table, Statistic, Divider, Timeline, Icon, Card } from 'antd';
import moment from 'moment';
import { CardX } from './../UIElements';

const { RangePicker } = DatePicker;

const extra = (props) => (
  <div>
    <p style={{
      display: 'inline-block',
      margin: '1px 20px 0 0',
      padding: '5px 10px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      cursor: 'default'
    }}>
      Start Date : {props.startdate}
    </p>
    <RangePicker
      defaultValue={[moment(), moment()]}
      format={'DD/MM/YYYY'}
    />
  </div>
);

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    rank: 32,
    rollno: 'AU-WP-001',
  },
  {
    key: '2',
    name: 'John',
    rank: 42,
    rollno: 'AU-WP-002',
  },
  {
    key: '3',
    name: 'Doe',
    rank: 20,
    rollno: 'AU-WP-003',
  },
  {
    key: '4',
    name: 'Kate',
    rank: 33,
    rollno: 'AU-WP-004',
  },
  {
    key: '5',
    name: 'Surinder',
    rank: 21,
    rollno: 'AU-WP-005',
  },
];

const columns = [
  {
    title: 'Roll No',
    dataIndex: 'rollno',
    key: 'rollno',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  }
];

const studentlist = () => (
  <Card title="Underperforming Students" headStyle={{ backgroundColor: '#eff2f3', padding: '0 10px' }} style={{ height: '360px' }}>
    <Table dataSource={dataSource} columns={columns} size="small" />
  </Card>
)

const BatchCard = (props) => {
  const headerStyle = {
    color: '#fff',
    backgroundColor: props.status === 'normal' ? '#8ec06c' : '#e5505a'
  }
  return <CardX title={props.name} extra={extra(props)} headStyle={headerStyle}>
    <Row>
      <Col span={24}>
        <div style={{ marginRight: '10px' }}>
          <Row gutter={16}>
            <Col span={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Instructor"
                  value={"Vishal Shetty"}
                  precision={0}
                  valueStyle={{ color: '#123b69' }}
                  suffix=""
                />
              </CardX>
            </Col>
            <Col span={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Students"
                  value={155}
                  precision={0}
                  valueStyle={{ color: '#123b69' }}
                  suffix=""
                />
              </CardX>
            </Col>
            <Col span={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Dropped Out"
                  value={20}
                  precision={0}
                  valueStyle={{ color: '#123b69' }}
                  suffix=""
                />
              </CardX>
            </Col>
            <Col span={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Attendance"
                  value={90}
                  precision={0}
                  valueStyle={{ color: '#123b69' }}
                  suffix="%"
                />
              </CardX>
            </Col>
            <Col span={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Instructor Ratings"
                  value={4.8}
                  precision={2}
                  valueStyle={{ color: '#123b69' }}
                  suffix="(avg)"
                />
              </CardX>
            </Col>

            <Col span={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Time till Graduation"
                  value={6}
                  precision={0}
                  valueStyle={{ color: '#123b69' }}
                  suffix="Months"
                />
              </CardX>
            </Col>
          </Row>

        </div>
        <Divider />
        <div>
          <Row>
            <Col span={11} >
              <Card title="Ongoing Lecture" headStyle={{ backgroundColor: '#eff2f3', padding: '0 10px' }} style={{ height: '360px' }}>
                <Timeline mode="alternate" >
                  <Timeline.Item color="green">Javascript ES5 & ES6</Timeline.Item>
                  <Timeline.Item color="green">Javascript Functions</Timeline.Item>
                  <Timeline.Item dot={<Icon type="sync" spin style={{ color: 'green', fontSize: '16px' }} />}>
                    Array, Objects & Classes
    </Timeline.Item>
                  <Timeline.Item color="gray">Closures, Callback & Promises</Timeline.Item>
                  <Timeline.Item color="gray">Error Handling</Timeline.Item>
                  <Timeline.Item color="gray">Monthly Test</Timeline.Item>

                </Timeline>
              </Card>
            </Col>
            <Col span={12} offset={1}>

              {studentlist()}

            </Col>
          </Row>
        </div>

      </Col>
      {/* <Col span={8}>

      </Col> */}
    </Row>
  </CardX>;
};

export default BatchCard;
