/* eslint-disable */
import {NavLink} from "react-router-dom";
import {Container,Col,Navbar,Nav} from "react-bootstrap";
import React from "react"
import {topNavs as navs} from "./top-navs";
import logo from "../../assets/logos/logo.svg"
import {v4} from "uuid"


function Header(){
    return (
        <Navbar expand='sm' className="shadow-sm bg-white rounded-sm top-nav mb-4">
            <Container fluid="xl">
                <Col className="pl-0">
                    <Navbar.Brand as={NavLink} to="/home" className="d-flex mr-auto">
                        <img
                            src={logo}
                            width="120"
                            height="37"
                            className="d-inline-block align-top"
                            alt="Civic City Dashboard"
                        />
                    </Navbar.Brand>
                </Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav ml" style={{marginLeft:"150px"}}>
                    <Col className="px-0">
                        <Nav className="mx-auto text-nowrap">
                            {navs.map(({label, path, icon}, idx) => {
                                return(<Nav.Link className="mx-2" key={v4()} as={NavLink} to={path}
                                          activeClassName="active">{icon}{' '.repeat(8)}{label}</Nav.Link>)

                            } )}
                        </Nav>
                    </Col>
                    <Col className="text-right pr-0">
                        <a href="https://soros.kg" rel='noreferrer noopener' target="_blank">
                            <img
                                src={"https://soros.kg/srs/wp-content/uploads/2020/09/soros-logo-h.png"}
                                alt='Soros.kg'
                                className="soros-logo"
                            />
                        </a>
                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header