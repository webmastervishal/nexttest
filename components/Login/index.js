import Link from "next/link";
import {
  Container,
  LogoContainer,
  FormContainer,
  InputX,
  ButtonContainer,
  Span,
  Anchor
} from "./style";
import { Image, ButtonX } from "./../Common/UIElements";

const LoginForm = () => {
  return (
    <FormContainer>
      <form>
        <InputX type="email" placeholder="Email" required />
        <InputX type="password" placeholder="Password" required />
        <ButtonContainer>
          <ButtonX bgcolor="#ffb300" size="large">
            Login
          </ButtonX>
        </ButtonContainer>
      </form>
      <ButtonContainer>
        <Span>Forgot Password?</Span>
        <Link href="/">
          <Anchor>Click here</Anchor>
        </Link>
      </ButtonContainer>
    </FormContainer>
  );
};

const Login = () => {
  return (
    <Container>
      <LogoContainer>
        <Image src="/images/logo.png" width="72px" height="72px" />
        <h1>AttainU</h1>
      </LogoContainer>
      <LoginForm />
    </Container>
  );
};

export default Login;
