import styled from 'styled-components';
import media from './../media';

const Title = styled.h1`
    font-size: 22px;
    margin-bottom: 30px;
    font-weight: 400;

    ${media.mobile`
      text-align: center;
      font-size: 20px;
    `};
`;

export default Title;
