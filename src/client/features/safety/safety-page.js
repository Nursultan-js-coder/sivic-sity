import React, {useEffect} from "react";
import MainHeader from "../../components/MainHeader"
import Error from "../../components/common/Error";
import MainContent from "../../components/MainContent";
import {Container} from "react-bootstrap";
import SpinnerLoader from "../../components/common/spinner-loader";
import {fetchData} from "../admin/adminSlice";
import {connect} from "react-redux";
import {safetyReducer} from "./safetySlice";
import {apiClient} from "../../api/apiClient";

function SafetyPage(props){
    const  {loading,error,pullPageInfo,pageInfo,indicators} =props;
    useEffect(() => {
        pullPageInfo();
    }, []);
    return (
        <Container className="dashboard-page">
            {loading? (<SpinnerLoader/>):(
                error ?  <Error error ={error}/> :
                    pageInfo &&
                <>
                    <MainHeader title = {pageInfo.title}
                                poweredBy = {pageInfo.poweredBy}
                                text={pageInfo.text}
                                imageURL = {pageInfo.imageUrl}
                                indicators = {indicators.find((indicator)=>indicator.title === "Safety")?.indicators}
                    />
                    <MainContent/>

                </>
            )}
        </Container>)
}

const mapStateToProps = (state)=>{
    return {
        loading:state.safety.loading,
        error:state.safety.error,
        pageInfo:state.safety.pageInfo,
        indicators:state.common.indicators,
        markers:state.safety.markers,
    }
}

const apiCalls = [
    {
        apiCall: apiClient.safetyPage.get,
        reducer: 'pageInfoLoaded'
    }
]

const mapDispatchToProps = (dispatch)=>{
    return {
        pullPageInfo:()=>dispatch(fetchData(safetyReducer,apiCalls)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SafetyPage)