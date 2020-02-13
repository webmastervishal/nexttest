import styled from "styled-components"
import { Card, List, Typography, Icon, Tabs } from 'antd';
import media from './../media';

const { TabPane } = Tabs;

export const Container = styled.div`
    background-color: #fff;
    padding: 36px;
    border-radius: 5px;

    .ant-tabs-nav .ant-tabs-tab-active {
      background-color: #123b69;
      height: 50px;
      width: 200px;
      text-align: left;
      padding: 12px 30px;
    }

    .ant-tabs .ant-tabs-left-bar .ant-tabs-tab {
      height: 50px;
      width: 200px;
      text-align: left;
    }

    ${media.mobile`
      background-color:transparent;
      padding: 0;
      border-radius: 0;

      .ant-tabs .ant-tabs-left-bar {
        width: 100% !important;
        border: 1px solid #e8e8e8;
        margin-bottom: 20px;
        background-color: #fff;
      }

      .ant-tabs .ant-tabs-left-bar .ant-tabs-tab {
        height: 50px;
        width: 100%;
        text-align: left;
      }

      .ant-tabs .ant-tabs-left-content {
        border : 1px solid #e8e8e8;
        background-color: #fff;
        padding: 10px 15px;
      }

      .ant-list-item-meta-description {
        line-height: 20px;
        font-size: 13px;
      }

    `}
`;

export const TabPaneX = styled(TabPane)`
  &.ant-tabs-nav .ant-tabs-tab-active {
      background-color: #123b69 !important;
    }
`;


export const CardX = styled(Card)`
    box-shadow: 0 0 9px 5px rgba(0, 0, 0, 0.1);
    border: none;
    background-color: #ffb300;
    color: #fff;
    user-select: none;
`;

export const ListX = styled(List)`
    color: #fff !important;
    font-size: 16px;
`;

export const ListItemX = styled(List.Item)`
    border: none !important;
    display: flex;
    justify-content: space-between;
`;

export const TypographyTextX = styled(Typography.Text)`
    color: #123c69 !important;
    letter-spacing: 0.7px;
`;

export const ListHeader = styled.div`
    display: flex;
    justify-content: center;
    font-size: 18px;
`;

export const IconX = styled(Icon)`
    color: #123c69;
    // font-size: 20px;
`;
