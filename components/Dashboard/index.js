import { PureComponent } from 'react';
import { Card, Row, Col } from "antd";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

const renderLineChart = (
  <ResponsiveContainer width={'100%'} height={300}>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
      <YAxis width={10} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Vishal" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Shahrukh" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

const Dashboard = () => {
  return <Row>
    <Col span={24}>
      <Card title="Instructor Ratings" headStyle={{ fontWeight: 300 }} style={{ boxShadow: '0px 6px 8px #e8e8e8' }}>
        {renderLineChart}</Card>
    </Col>
  </Row>;
};

export default Dashboard;
