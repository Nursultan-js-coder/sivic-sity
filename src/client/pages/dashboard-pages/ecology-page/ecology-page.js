import React, {useEffect} from "react";
import MainHeader from "../../../components/MainHeader"
import Dashboards from "../../../components/MainContent"
import {inject, observer} from "mobx-react";
import {compose} from "recompose";
import Error from "../../../components/common/Error";
import MainContent from "../../../components/MainContent";
import {Container} from "react-bootstrap";
import SpinnerLoader from "../../../components/common/spinner-loader";

function EcologyPage({ecologyPageStore,homeIndicatorsPageStore}){
    useEffect(() => {
        ecologyPageStore.pullPage();
        return () => {
            ecologyPageStore.resetPage();
        };
    }, []);

    return (
        <Container className="dashboard-page">
            {ecologyPageStore.pageStore.pageIsLoading ? (<SpinnerLoader/>):(
                ecologyPageStore.pageStore.pageError ?  <Error error ={ecologyPageStore.pageStore.pageError}/> :
                    <>
                        <MainHeader title = {ecologyPageStore.pageStore.pageInfo?.title}
                                    poweredBy = {ecologyPageStore.pageStore.pageInfo?.poweredBy}
                                    text={ecologyPageStore.pageStore.pageInfo?.text}
                                    imageURL = {ecologyPageStore.pageStore.pageInfo?.imageUrl}
                                    indicators = {homeIndicatorsPageStore.indicators.find((indicator)=>indicator.title === "Ecology")?.indicators}
                        />
                        <MainContent markers={ecologyPageStore.markers} mapLoading={ecologyPageStore.mapStore.coordinatesLoading}/>

                    </>
            )}
        </Container>)
}
export default  compose(inject("ecologyPageStore","homeIndicatorsPageStore"))(observer(EcologyPage))
