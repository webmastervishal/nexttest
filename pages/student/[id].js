import { useRouter } from 'next/router';
import auth from './../../utils/auth';
import MasterLayout from "./../../components/Common/Layout";

const Student = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MasterLayout>
      <h1>Student Id : {id}</h1>
    </MasterLayout>
  );
}

Student.getInitialProps = (ctx) => {
  const token = auth(ctx);
  return { token };
}

export default Student;
