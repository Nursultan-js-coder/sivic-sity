import {Container, Row, Col} from "react-bootstrap";
import React from "react"
import logo from "../../assets/img/footer-icon.svg"
import {Link} from "react-router-dom";
function Footer(){
    return (
        <footer className="footer pt-2 shadow-sm mt-5">
            <Container>
                <Row>
                    <Col sm={4}>
                        <Link to={"home"}>
                            <img
                            src={logo}
                            width={200}
                            height={150}
                            className="image-fluid"
                            alt="Civic City Dashboard"
                            />
                        </Link>
                    </Col>
                    <Col className="text-center" sm={4}>
                        <p className="text-muted pt-lg-5">citydata.kg </p>
                    </Col>
                    <Col className="text-center  pt-5" sm={4}>
                        <p className="cooperation-text">Contacts</p>
                        <p className="address-text">+995 555 555 555</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;
