import { useRouter } from 'next/router';
import auth from './../../utils/auth';
import MasterLayout from "./../../components/Common/Layout";

const Batch = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MasterLayout>
      <h1>Batch Id : {id}</h1>
    </MasterLayout>
  );
}

Batch.getInitialProps = (ctx) => {
  const token = auth(ctx);
  return { token };
}

export default Batch;
