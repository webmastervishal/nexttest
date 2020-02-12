// import { Row, Col } from "antd";

// import PersonalInfo from "./PersonalInfo";
// import ContactDetails from "./ContactDetails";
// import BatchDetails from "./BatchDetails";
// import Performance from "./Performance";

// const Profile = () => {
//   return (
//     <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
//       <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
//         <PersonalInfo />
//       </Col>
//       <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
//         <ContactDetails />
//       </Col>
//       <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
//         <BatchDetails />
//       </Col>
//       <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
//         <Performance />
//       </Col>
//     </Row>
//   );
// };

// export default Profile;

import { Tabs, Row, Col } from 'antd';
import { Container, TabPaneX } from './style';

import PersonalInfo from "./PersonalInfo";
import ContactDetails from "./ContactDetails";
import BatchDetails from "./BatchDetails";
import Performance from "./Performance";


class Profile extends React.Component {

  render() {
    return (
      <Container>

        <Tabs tabPosition="left">
          <TabPaneX tab="Personal Information" key="1" >
            <h1>Personal Information</h1>
          </TabPaneX>

          <TabPaneX tab="Batch Details" key="3">
            woodpecker
          </TabPaneX>

          <TabPaneX tab="Settings" key="2">
            password
          </TabPaneX>

        </Tabs>
      </Container>
    );
  }
}

export default Profile;
