import { Container, LogoContainer, FormContainer, InputX } from "./style"
import Image from "./../Common/UIElements/image"
import ButtonX from "./../Common/UIElements/button"
import styled from "styled-components"


const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px
`;

const LoginForm = () => {
    return (
        <FormContainer>
            <form>
                <InputX type="email" placeholder="Email" required />
                <InputX type="password" placeholder="Password" required />
                <ButtonContainer>
                    <ButtonX bgcolor="#ffb300" size="large">Login</ButtonX>
                </ButtonContainer>
            </form>
        </FormContainer>
    )
}

const Login = () => {
    return (
        <Container>
            <LogoContainer>
                <Image src="http://apply.attainu.com/assets/img/logo_180x180.png" width="80px" height="80px" />
            </LogoContainer>
            <LoginForm />
        </Container>
    )
}

export default Login