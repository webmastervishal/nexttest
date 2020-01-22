import styled from "styled-components";
import { Input } from 'antd';

export const Container = styled.div`
    height: 450px;
    width: 400px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 0 7px 5px rgba(0, 0, 0, 0.5);
    position: relative;
`;

export const LogoContainer = styled.div`
    position: absolute;
    top: -20px;
    left: 20px;
    background-color: #123c69;
    width: 360px;
    height: 160px;
    z-index: 1;
    border-radius: 5px;
    box-shadow: 0 5px 10px 3px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center
`;

export const FormContainer = styled.div`
    position: absolute;
    top: 180px;
    height: 290px;
    margin: 20px;
    width: 360px;
`;

export const InputX = styled(Input)`
    border: none;
    border-bottom: 1px solid #BFBFBF !important;
    border-radius: 0;
    margin-bottom: 30px;

    :focus{
        box-shadow: none;
    }
`;