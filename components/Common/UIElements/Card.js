import { Card } from 'antd';
import styled from 'styled-components';
import media from './../media';

const CardX = styled(Card)`
  box-shadow: 0px 6px 8px #e8e8e8;

  ${props => props.height && { height: props.height }}

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

  ${media.mobile`
    margin-bottom: 6px;
    height: auto;

    .ant-card-head {
      min-height: 30px;
    }

    .ant-card-head-wrapper {
      margin: 4px 0;
    }
    .ant-card-head-title {
      padding: 4px 0;
    }

    .ant-timeline-item {
      padding: 0 0 3px;
      font-size: 12px;
    }

    .ant-card-body {
      padding: 12px;
    }

    .ant-statistic-content {
      font-size: 16px;
    }
  `}
`;

export default CardX;
