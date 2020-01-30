import { Row, Col } from "antd";

import PersonalInfo from "./PersonalInfo";
import ContactDetails from "./ContactDetails";
import BatchDetails from "./BatchDetails";
import Performance from "./Performance";

const Profile = () => {
  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
        <PersonalInfo />
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
        <ContactDetails />
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
        <BatchDetails />
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
        <Performance />
      </Col>
    </Row>
  );
};

export default Profile;
