import Router from 'next/router';
import nextcookies from 'next-cookies';

const auth = (ctx) => {
  const { token } = nextcookies(ctx);

  if (!token) {
    if (typeof window === 'undefined') {
      if (typeof ctx.res.writeHead === 'function') {
        ctx.res.writeHead(302, { Location: '/' });
        ctx.res.end();
      }
    } else {
      Router.push('/');
    }
  }

  return token;
}

export default auth;
