import { Col } from "antd";
import BatchCard from './../components/Common/BatchCard';
import MasterLayout from "./../components/Common/Layout";
import { LineChart, Widget } from "../components/Common/Charts";
import { RowX } from './../components/Common/UIElements';

const instructorData = [
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

const studentData = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default () => {
  return (
    <MasterLayout>
      <RowX>
        <Widget
          title='Total Students'
          count='1,550'
          chart='area'
          chartdata={studentData}
        />
        <Widget
          title='Total Instructors'
          count='10'
          chart='bar'
          chartdata={studentData}
        />
        <Widget
          title='Total Batches'
          count='7'
          chart='area'
          chartdata={studentData}

        />
        <Widget
          title='Total Students'
          count='1,550'
          chart='bar'
          chartdata={studentData}

        />
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

      <RowX>
        <Col span={24}>
          <LineChart data={instructorData} />
        </Col>
      </RowX>

    </MasterLayout>
  )
};
