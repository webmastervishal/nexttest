import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'antd';

export default () => {
    return <>
        <Card>
            <Title>Welcome to Neptune</Title>
            <Button type="danger">Click me!</Button>
        </Card>
    </>
}

const Title = styled.h1`
    color: #FFB300;
`;  