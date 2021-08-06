import React, {useEffect} from "react"
import {Container,Row,Col} from "react-bootstrap";
import MainHeaderContext from "./MainHeaderContext"
import MainHeaderImage from "./MainHeaderImage"
import DynamicIndicators from "../features/safety/DynamicIndicators"
import {imageComposer} from "../utils";

function MainHeader({title,poweredBy,text,imageURL,indicators}){
    useEffect(() => {
    }, []);

    return (
        <Container style={{padding:0}} className="mb-2">
            <Row>
                <Col sm={4}>
                    <MainHeaderContext poweredBy={poweredBy} title={title} text ={text} imageURL={imageURL}/>
                </Col>
                <Col sm={8}>
                    <MainHeaderImage imageURL={imageURL}/>

                </Col>
            </Row>

                <DynamicIndicators indicators={indicators} />
        </Container>
)
}


export default MainHeader;
