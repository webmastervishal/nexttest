import auth from './../../utils/auth';
import MasterLayout from "./../../components/Common/Layout";
import Profile from "./../../components/Common/Profile";

const ProfilePage = () => (
  <MasterLayout>
    <Profile />
  </MasterLayout>
);

ProfilePage.getInitialProps = (ctx) => {
  const token = auth(ctx);
  return { token };
}

export default ProfilePage;
