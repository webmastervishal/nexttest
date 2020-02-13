import { Card } from 'antd';
import styled from 'styled-components';

const CardX = styled(Card)`
  box-shadow: 0px 6px 8px #e8e8e8;

  .ant-card-head {
    font-weight: 300;
    padding: 0 12px;
  }

  .ant-card-extra {
    padding: 0;
  }

  .ant-statistic-content-prefix {
      float: right !important;
    }
`;

export default CardX;
