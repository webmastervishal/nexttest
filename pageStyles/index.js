import styled from 'styled-components';
import media from "./../components/Common/media"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) 0% 0% / cover no-repeat fixed, url(/images/loginbackground.jpg);
    color: #123c69;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.mobile`
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) 0% 0% / cover no-repeat fixed, url(/images/loginbackground2.jpg);
        background-size: 100vw 100vh;
    `}

    ${media.laptop`
        background-size: 100vw 100vh;
    `}
`;