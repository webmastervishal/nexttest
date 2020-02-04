import { PureComponent } from 'react';
import { Card, Row, Col } from "antd";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

const LineChartX = (props) => {
  return <Card title="Instructor Ratings" headStyle={{ fontWeight: 300 }} style={{ boxShadow: '0px 6px 8px #e8e8e8' }}>
    <ResponsiveContainer width={'100%'} height={300}>
      <LineChart
        width={500}
        height={300}
        data={props.data}
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
  </Card>;
};

export default LineChartX;
