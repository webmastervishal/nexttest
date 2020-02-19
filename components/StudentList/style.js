import styled from 'styled-components';
import { Table, Modal } from 'antd';
import media from './../Common/media';

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.mobile`
    flex-direction: column;
    margin-top: 20px;

  `}
`;

export const Filter = styled.p`
  margin: 4px 30px;
  font-weight: 600;
`;

export const TableX = styled(Table)`
  ${media.laptop`
     .ant-table table {
      width: max-content;
    }

    .ant-table-content {
      overflow: scroll;
    }
  `}
`;

export const ModalX = styled(Modal)`
  ${media.mobile`
    top: 0;
  `}
`;
