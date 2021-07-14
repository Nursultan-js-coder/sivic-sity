import {Container,Row,Col} from "react-bootstrap";
import LinkBox from "../components/common/LinkBox";
import React, {useEffect} from "react"
import {inject, observer} from "mobx-react";
import {compose} from "recompose"
import {v4 as uuidv4} from "uuid"
import Error from "../components/common/Error"


function Home({homeIndicatorsPageStore}){
    useEffect(()=>{
        homeIndicatorsPageStore.pullPage();
        return (()=>homeIndicatorsPageStore.resetPage())
    },[])

   return (
 <Container className="mt-2">
     <Row >
         {homeIndicatorsPageStore.pageLoading ? <p>Loading...</p> : (
             homeIndicatorsPageStore.error ? <Error error ={homeIndicatorsPageStore.error }/> :
                 (homeIndicatorsPageStore.indicators &&  homeIndicatorsPageStore.indicators.map(indicator=>{
                 return (
                     <Col  className="mb-2"sm ={4}>
                         <LinkBox indicator={indicator} key={uuidv4()}/>
                     </Col>
                 )
             })))
         }
     </Row>
 </Container>

)
}
export default compose(inject("homeIndicatorsPageStore"))(observer(Home))
