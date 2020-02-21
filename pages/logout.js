import Router from 'next/router';
import cookie from 'js-cookie';
import auth from './../utils/auth';
import { Spin } from 'antd';

const Logout = () => {
  return true;
}

Logout.getInitialProps = ctx => {
  cookie.remove('token');
  const token = auth(ctx);
  return {};
}
export default Logout;
