import styled from 'styled-components';
import { Table } from 'antd';
import media from './../media';

export const Extra = styled.div`

`;

export const Info = styled.p`
      display: inline-block;
      margin: 1px 20px 0 0;
      padding: 5px 10px;
      background-color: #fff;
      border-radius: 5px;
      cursor: default;
`;

export const Stats = styled.div`
  margin-right: 10px;

  ${media.mobile`
    margin-right: 0px;
  `}
`;

export const TableX = styled(Table)`
  ${media.mobile`

    .ant-table{
      font-size: 13px;
    }
    .ant-table table {
      width: max-content;
    }

    .ant-table-content {
      overflow: scroll;
    }
  `}
`;
