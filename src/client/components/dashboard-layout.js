import {Container,Col,Row} from "react-bootstrap";
import React from "react";
import SideBar from "./SideBar"
import TwitterWidget from "./twitter/TwitterWidget"
import SafetyPage from "../pages/dashboard-pages/safety-page/safety-page";


function DashboardLayout({children}){
return (
    <Container fluid={"2x"} className="p-2">
        <Row>
            <Col sm={2}><SideBar/></Col>
            {/*<Col sm={8}><SafetyPage/></Col>*/}
            <Col sm={8}>{children}</Col>
            <Col sm={2}><TwitterWidget/></Col>
        </Row>
    </Container>
)
}

export default DashboardLayout;