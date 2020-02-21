import nextcookies from 'next-cookies';
import { Container } from "./../components/Common/UIElements";
import Login from "./../components/Login";

const LoginPage = () => {
  return (
    <>
      <Container>
        <Login />
      </Container>
    </>
  )
}

LoginPage.getInitialProps = (ctx) => {
  const { token } = nextcookies(ctx);
  if (token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/dashboard' });
      ctx.res.end();
    } else {
      Router.push('/dashboard');
    }
  }

  return { token };
}

export default LoginPage;
