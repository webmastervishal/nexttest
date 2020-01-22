import styled from "styled-components"
import { Button } from 'antd';

const ButtonX = styled(Button)`
    background-color: ${props => props.bgcolor} !important;
    border: none !important;
    color: ${props => props.color ? props.color : "inherit"} !important;

    :hover{
        background-color: #f7c44c !important;
    }

`;

export default ButtonX