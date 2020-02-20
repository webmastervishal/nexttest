import Link from "next/link";
import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Form, Alert } from 'antd';
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

import { USER_LOGIN } from './../../apollo/queries';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, error, data }] = useMutation(USER_LOGIN);

  const userlogin = (e) => {
    e.preventDefault();

    login({ variables: { email, password } });
  }

  return (

    <FormContainer>
      <Form onSubmit={userlogin}>
        <InputX type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
        <InputX type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
        {data && (data.login.success ? <Alert message="Login Successful, redirecting you to the dashboard..." type="success" /> : <Alert message="Invalid Credentials" type="error" />)}
        {error && <Alert message="Oops! Something went wrong try again later" type="error" />}
        <ButtonContainer>
          <ButtonX bgcolor="#ffb300" size="large" htmlType="submit" loading={loading}>
            Login
          </ButtonX>
        </ButtonContainer>
      </Form>

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
