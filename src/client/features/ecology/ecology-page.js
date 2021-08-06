import React, {useEffect} from "react";
import MainHeader from "../../components/MainHeader"
import Error from "../../components/common/Error";
import {Container} from "react-bootstrap";
import SpinnerLoader from "../../components/common/spinner-loader";
import {apiClient} from "../../api/apiClient";
import {fetchData} from "../admin/adminSlice";
import {connect} from "react-redux";
import {ecologyReducer} from "./ecologySlice"
import MainContent from "../../components/MainContent";

function EcologyPage(props){
    const  {loading,error,insitutionTypes,pullPageInfo,pageInfo,markers,indicators} =props;

    useEffect(() => {
        pullPageInfo();
    }, []);

    return (
        <Container className="dashboard-page">
            {loading ? (<SpinnerLoader/>):(
                error?  <Error error ={error}/> :
                    pageInfo &&
                    <>
                        <MainHeader title = {pageInfo.title}
                                    poweredBy = {pageInfo.poweredBy}
                                    text={pageInfo.title}
                                    imageURL = {pageInfo.imageUrl}
                                    indicators = {indicators.find((indicator)=>indicator.title === "Ecology")?.indicators}
                        />
                        {/*<MainContent markers={markers} />*/}

                    </>
            )}
        </Container>)
}

const apiCalls = [
    {
        apiCall: apiClient.ecologyPage.get,
        reducer: 'pageInfoLoaded'
    },
    {
        apiCall:apiClient.ecologyPage.coordinates,
        reducer:'mapInfoLoaded'
    },
    // {
    //     apiCall:apiClient.ecologyPage.institutionTypes,
    //     reducer:'loadedInstitutionTypes'
    // }
]
const mapStateToProps = (state)=>{
    return {
        loading:state.ecology.loading,
        error:state.ecology.error,
        pageInfo:state.ecology.pageInfo,
        indicators:state.common.indicators,
        markers:state.ecology.markers,



    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        pullPageInfo:()=>dispatch(fetchData(ecologyReducer,apiCalls)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EcologyPage)