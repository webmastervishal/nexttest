import styled from 'styled-components';
import { Card, Icon, Skeleton, Avatar, Col } from 'antd';

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

export default () => (
  <ColX xs={24} lg={6}>
    <Card
      style={{ marginTop: 16, boxShadow: '0px 6px 8px #e8e8e8' }}
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
    >
      <Skeleton loading={true} avatar active>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  </ColX>
)
