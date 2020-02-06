import styled from 'styled-components';
import { Card, Icon, Col } from 'antd';
import { AreaChart, BarChart } from './../Charts';
import media from './../media';

const { Meta } = Card;

const ColX = styled(Col)`
  width: 24%;
  margin-right: 9px;

  ${media.laptop`
    width: 23%;
    margin-right: 9px;
  `}

  ${media.tablet`
    width: 100%;
    margin-right: 0;
  `}
`;

export default (props) => {
  const { title, chartdata, chart, count } = props;
  return (
    <ColX xs={24} lg={6}>
      <Card
        style={{ marginTop: 16, boxShadow: '0px 6px 8px #e8e8e8' }}
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="ellipsis" key="ellipsis" />,
        ]}
      >
        <p style={{ color: 'rgba(0,0,0,.45)' }}>{title}</p>
        <h2>{count}</h2>
        {chart === 'area' && <AreaChart data={chartdata} />}
        {chart === 'bar' && <BarChart data={chartdata} />}

      </Card>
    </ColX>
  )
};
