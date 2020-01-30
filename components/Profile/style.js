import { Card, List, Typography, Icon } from 'antd'
import styled from "styled-components"

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