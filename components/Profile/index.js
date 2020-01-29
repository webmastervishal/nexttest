import { Row, Col } from 'antd';
import { CardX, ListX, ListItemX, TypographyTextX } from "./style"

const PersonalInfo = () => {
    return (
        <CardX>
            <ListX
                header={<div>Personal Information</div>}
            >
                <ListItemX>
                    <TypographyTextX>First Name</TypographyTextX> Shahrukh
                </ListItemX>
                <ListItemX>
                    <TypographyTextX>Last Name</TypographyTextX> Anwar
                </ListItemX>
                <ListItemX>
                    <TypographyTextX>Gender</TypographyTextX> Male
                </ListItemX>
            </ListX>
        </CardX>
    )
}

const ContactDetails = () => {
    return (
        <CardX>ContactDetails</CardX>
    )
}

const BatchDetails = () => {
    return (
        <CardX>BatchDetails</CardX>
    )
}

const Performance = () => {
    return (
        <CardX>Performance</CardX>
    )
}

const Profile = () => {
    return (
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}><PersonalInfo /></Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}><ContactDetails /></Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}><BatchDetails /></Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}><Performance /></Col>
        </Row>
    )
}

export default Profile