import MasterLayout from "./../components/Common/Layout";
import LineChart from "../components/Common/Charts/LineChart";
import Widget from "../components/Common/Charts/Widget";
import { Row, Col } from "antd";

const data = [
  {
    name: '1st', Vishal: 3.5, Shahrukh: 4, amt: 2400,
  },
  {
    name: '2nd', Vishal: 4.5, Shahrukh: 4.7, amt: 2210,
  },
  {
    name: '3rd', Vishal: 5, Shahrukh: 4.9, amt: 2290,
  },
  {
    name: '4th', Vishal: 3, Shahrukh: 4.2, amt: 2000,
  },
  {
    name: '5th', Vishal: 4.9, Shahrukh: 4, amt: 2181,
  },
  {
    name: '6th', Vishal: 2.8, Shahrukh: 4, amt: 2500,
  },
  {
    name: '7th', Vishal: 4, Shahrukh: 2, amt: 2100,
  },
  {
    name: '8th', Vishal: 2.5, Shahrukh: 4, amt: 2100,
  },
  {
    name: '9th', Vishal: 2.9, Shahrukh: 3.9, amt: 2100,
  },
  {
    name: '10th', Vishal: 3.2, Shahrukh: 4.4, amt: 2100,
  },
  {
    name: '11th', Vishal: 3.9, Shahrukh: 2.6, amt: 2100,
  },
  {
    name: '12th', Vishal: 4.9, Shahrukh: 5, amt: 2100,
  },
  {
    name: '13th', Vishal: 5, Shahrukh: 4.5, amt: 2100,
  },
  {
    name: '14th', Vishal: 2, Shahrukh: 3.9, amt: 2100,
  }
];

export default () => (
  <MasterLayout>
    <Row style={{ margin: '10px 0 20px 0' }}>
      <Widget />
      <Widget />
      <Widget />
      <Widget />
    </Row>

    <Row>
      <Col span={24}>
        <LineChart data={data} />
      </Col>
    </Row>

  </MasterLayout>
);
