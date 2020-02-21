import auth from './../utils/auth';
import MasterLayout from "./../components/Common/Layout";
import StudentList from "./../components/StudentList";

const Students = () => <MasterLayout>
  <StudentList />
</MasterLayout>

Students.getInitialProps = (ctx) => {
  const token = auth(ctx);
  return { token };
}

export default Students;
