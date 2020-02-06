import { BarChart, Tooltip, Bar, ResponsiveContainer } from 'recharts';

export default (props) => {
  return <ResponsiveContainer width={'100%'} height={60}>
    <BarChart width={200} height={60} data={props.data}>
      <Tooltip />
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
}
