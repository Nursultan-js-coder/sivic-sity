import React, {useEffect} from "react";
import MainHeader from "../../components/MainHeader"
import Error from "../../components/common/Error";
import MainContent from "../../components/MainContent";
import {Container} from "react-bootstrap";
import SpinnerLoader from "../../components/common/spinner-loader";
import {fetchData,adminReducer} from "./adminSlice";
import {connect, useDispatch, useSelector} from "react-redux";
import {apiClient} from "../../api/apiClient";

function AdministrationPage(props){
    const  {loading,error,insitutionTypes,pullPageInfo,pageInfo,markers,indicators} =props;

    useEffect(() => {
        pullPageInfo();


    }, []);
    console.log("page info :",pageInfo)
    return (
        <Container className="dashboard-page">
            {loading ? (<SpinnerLoader/>):(
                error ?  <Error error ={error}/> :
                    pageInfo  &&
                            <>
                                <MainHeader title = {pageInfo.title}
                                            poweredBy = {pageInfo.poweredBy}
                                            text={pageInfo.text}
                                            imageURL = {pageInfo.imageUrl}
                                            indicators = {indicators.find((indicator)=>indicator.title === "Administration")?.indicators}
                                />


                                 <MainContent
                                     markers={markers}/>
                            </>


                    )
                }


        </Container>)
}

const apiCalls = [
    {
        apiCall: apiClient.administration.get,
        reducer: 'pageInfoLoaded'
    },
    {
        apiCall:apiClient.administration.coordinates,
        reducer:'mapInfoLoaded'
    },
    {
        apiCall:apiClient.administration.institutionTypes,
        reducer:'loadedInstitutionTypes'
    }
]
const mapStateToProps = (state)=>{
    return {
        loading:state.admin.loading,
        error:state.admin.error,
        pageInfo:state.admin.pageInfo,
        indicators:state.common.indicators,
        markers:state.admin.markers,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        pullPageInfo:()=>dispatch(fetchData(adminReducer,apiCalls)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdministrationPage)