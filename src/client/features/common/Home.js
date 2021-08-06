import {Container,Row,Col} from "react-bootstrap";
import LinkBox from "../../components/common/LinkBox";
import React, {useEffect} from "react"

import {v4 as uuidv4} from "uuid"
import Error from "../../components/common/Error"
import {apiClient} from "../../api/apiClient";
import SpinnerLoader from "../../components/common/spinner-loader";
import {connect, useDispatch, useSelector} from "react-redux";
import {pullPageInfo} from "./index";

function Home(props){
    const dispatch = useDispatch();
    const {loading,error,indicators,pullPage } = props;
    useEffect( ()=>{
        pullPage();
    },[])

   return (
 <Container className="mt-2">
     <Row >
         {loading ? <SpinnerLoader/> : (
             error ? <Error error ={error}/> :
                 indicators &&
                 (indicators.map(indicator=>{
                 return (
                     <Col  className="mb-2"sm ={4}>
                         <LinkBox indicator={indicator} key={uuidv4()}/>
                     </Col>
                 )
             }))

         )
         }
     </Row>
 </Container>

)
}
const  mapStateToProps = (state)=>{
    return {
        loading:state.common.loading,
        error:state.common.error,
        indicators:state.common.indicators,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        pullPage:()=>dispatch(pullPageInfo(apiClient.common.indicators))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)