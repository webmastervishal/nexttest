import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

export default (props) => {
  return <ResponsiveContainer width={'100%'} height={60}>
    <AreaChart
      width={200}
      height={60}
      data={props.data}
      margin={{
        top: 5, right: 0, left: 0, bottom: 5,
      }}
    >
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
}
