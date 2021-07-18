import React, {useEffect} from "react";
import MainHeader from "../../../components/MainHeader"
import {inject, observer} from "mobx-react";
import {compose} from "recompose";
import Error from "../../../components/common/Error";
import {Container} from "react-bootstrap";
import MainContent from "../../../components/MainContent";
import SpinnerLoader from "../../../components/common/spinner-loader";

function HealthPage({healthPageStore,homeIndicatorsPageStore}){
    useEffect(() => {
        healthPageStore.pullPage();
        return () => {
            healthPageStore.resetPage();
        };
    }, []);

    return (

        <Container className="dashboard-page">
            {(healthPageStore.pageStore.pageIsLoading) ? (<SpinnerLoader/>):(
                (healthPageStore.pageStore.pageError  ) ?  <Error error ={healthPageStore.pageStore.pageError}/> :
                    <>
                        <MainHeader title = {healthPageStore.pageStore.pageInfo?.title}
                                    poweredBy = {healthPageStore.pageStore.pageInfo?.poweredBy}
                                    text={healthPageStore.pageStore.pageInfo?.text}
                                    imageURL = {healthPageStore.pageStore.pageInfo?.imageUrl}
                                    indicators = {homeIndicatorsPageStore.indicators.find((indicator)=>indicator.title === "Health")?.indicators}

                        />
                        <MainContent
                            mapLoading={healthPageStore.mapStore.coordinatesLoading}
                            markers={healthPageStore.markers}/>
                    </>
            )}
        </Container>
    )
}
export default  compose(inject("healthPageStore","homeIndicatorsPageStore"))(observer(HealthPage))
