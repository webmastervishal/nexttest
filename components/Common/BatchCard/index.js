import { DatePicker, Row, Col, Statistic, Divider, Timeline, Icon } from 'antd';
import moment from 'moment';
import { CardX } from './../UIElements';
import { Extra, Info, Stats, TableX } from './style';

const { RangePicker } = DatePicker;

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

const extra = (props) => (
  <Extra>
    <Info>
      Start Date : {props.startdate}
    </Info>
    <RangePicker
      defaultValue={[moment(), moment()]}
      format={'DD/MM/YYYY'}
    />
  </Extra>
);

const studentlist = () => (
  <CardX title="Underperforming Students" height="360px" headStyle={{ backgroundColor: '#eff2f3' }}>
    <TableX dataSource={dataSource} columns={columns} size="small" />
  </CardX>
);

const lectures = () => (
  <CardX title="Ongoing Lecture" height="360px" headStyle={{ backgroundColor: '#eff2f3' }}>
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
  </CardX>
)

const BatchCard = (props) => {
  const headerStyle = {
    color: '#fff',
    backgroundColor: props.status === 'normal' ? '#8ec06c' : '#e5505a'
  }

  const cardStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: props.status === 'normal' ? '#8ec06c' : '#e5505a'
  }

  return <CardX title={props.name} extra={extra(props)} headStyle={headerStyle} style={cardStyle}>
    <Row>
      <Col span={24}>
        <Stats>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={8} xl={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Instructor"
                  value={"Vishal Shetty"}
                  precision={0}
                  prefix={<Icon type="user" />}
                  valueStyle={{ color: '#123b69', fontSize: '20px' }}
                  suffix=""
                />
              </CardX>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={4}>
              <CardX bodyStyle={{ padding: '10px', fontSize: '20px' }}>
                <Statistic
                  title="Students"
                  value={155}
                  precision={0}
                  prefix={<Icon type="usergroup-add" />}
                  valueStyle={{ color: '#123b69', fontSize: '20px' }}
                  suffix=""
                />
              </CardX>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Dropped Out"
                  value={20}
                  precision={0}
                  prefix={<Icon type="usergroup-delete" />}
                  valueStyle={{ color: '#123b69', fontSize: '20px' }}
                  suffix=""
                />
              </CardX>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Attendance"
                  value={90}
                  precision={0}
                  prefix={<Icon type="sound" />}
                  valueStyle={{ color: '#123b69', fontSize: '20px' }}
                  suffix="%"
                />
              </CardX>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Instructor Ratings"
                  value={4.8}
                  precision={2}
                  prefix={<Icon type="line-chart" />}
                  valueStyle={{ color: '#123b69', fontSize: '20px' }}
                  suffix="(avg)"
                />
              </CardX>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={4}>
              <CardX bodyStyle={{ padding: '10px' }}>
                <Statistic
                  title="Time till Graduation"
                  value={6}
                  precision={0}
                  prefix={<Icon type="clock-circle" />}
                  valueStyle={{ color: '#123b69', fontSize: '20px' }}
                  suffix="Months"
                />
              </CardX>
            </Col>
          </Row>

        </Stats>
        <Divider />
        <div>
          <Row>
            <Col xs={24} sm={24} md={24} lg={11} xl={11}>
              {lectures()}
            </Col>
            <Col xs={24} sm={24} md={24} lg={{ span: 12, offset: 1 }} xl={{ span: 12, offset: 1 }} >
              {studentlist()}
            </Col>
          </Row>
        </div>

      </Col>
    </Row>
  </CardX>;
};

export default BatchCard;
