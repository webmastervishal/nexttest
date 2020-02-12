import { useRouter } from 'next/router';
import MasterLayout from "./../../components/Common/Layout";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MasterLayout>
      <h1>Student Id : {id}</h1>
    </MasterLayout>
  );
}