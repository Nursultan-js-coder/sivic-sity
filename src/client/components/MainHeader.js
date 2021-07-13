import React, {useEffect} from "react"
import {Container,Row,Col} from "react-bootstrap";
import MainHeaderContext from "./MainHeaderContext"
import MainHeaderImage from "./MainHeaderImage"
import DynamicIndicators from "../pages/dashboard-pages/safety-page/DynamicIndicators"
import {imageComposer} from "../utils";

function MainHeader({title,poweredBy,text,imageURL}){
    useEffect(() => {
      console.log("title: ",title,"poweredBy:",poweredBy,"imageURL: ",imageComposer(imageURL))
    }, []);

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <MainHeaderContext poweredBy={poweredBy} title={title} text ={text} imageURL={imageURL}/>
                </Col>
                <Col sm={8}>
                    <MainHeaderImage imageURL={imageURL}/>

                </Col>
            </Row>

                <DynamicIndicators/>
        </Container>
)
}


export default MainHeader;
