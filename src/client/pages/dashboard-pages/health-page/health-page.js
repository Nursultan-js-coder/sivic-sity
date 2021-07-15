import React, {useEffect} from "react";
import MainHeader from "../../../components/MainHeader"
import Dashboards from "../../../components/MainContent"
import {inject, observer} from "mobx-react";
import {compose} from "recompose";
import Error from "../../../components/common/Error";
import {Container} from "react-bootstrap";
import MainContent from "../../../components/MainContent";

function HealthPage({healthPageStore,homeIndicatorsPageStore}){
    useEffect(() => {
        healthPageStore.pullPage();
        return () => {
            healthPageStore.resetPage();
        };
    }, []);

    return (

        <Container className="health-page">
            {healthPageStore.pageStore.pageIsLoading ? (<p>Loading ... </p>):(
                healthPageStore.pageStore.pageError ?  <Error error ={healthPageStore.pageStore.pageError}/> :
                    <>
                        <MainHeader title = {healthPageStore.pageStore.pageInfo?.title}
                                    poweredBy = {healthPageStore.pageStore.pageInfo?.poweredBy}
                                    text={healthPageStore.pageStore.pageInfo?.text}
                                    imageURL = {healthPageStore.pageStore.pageInfo?.imageUrl}
                                    indicators = {homeIndicatorsPageStore.indicators.find((indicator)=>indicator.title === "Health")?.indicators}

                        />
                        <MainContent/>


                    </>
            )}
        </Container>
        )
}
export default  compose(inject("healthPageStore","homeIndicatorsPageStore"))(observer(HealthPage))
