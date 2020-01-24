import Link from 'next/link'
import { Container, LogoContainer, FormContainer, InputX, ButtonContainer, Span, Anchor } from "./style"
import Image from "./../Common/UIElements/image"
import ButtonX from "./../Common/UIElements/button"

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
            <ButtonContainer>
                <Span>Forgot Password?</Span><Link href="/"><Anchor>Click here</Anchor></Link>
            </ButtonContainer>
        </FormContainer>
    )
}

const Login = () => {
    return (
        <Container>
            <LogoContainer>
                <Image src="/images/logo.png" width="80px" height="80px" />
            </LogoContainer>
            <LoginForm />
        </Container>
    )
}

export default Login