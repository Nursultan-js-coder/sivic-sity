import React, {useEffect} from "react";
import MainHeader from "../../../components/MainHeader"
import Dashboards from "../../../components/MainContent"
import {inject, observer} from "mobx-react";
import {compose} from "recompose";
import Error from "../../../components/common/Error";
import {Container} from "react-bootstrap";

function HealthPage({healthPageStore,homeIndicatorsPageStore}){
    useEffect(() => {
        healthPageStore.pullPage();
        return () => {
            healthPageStore.resetPage();
        };
    }, []);

    return (

        <div className="safety-page">
            {healthPageStore.pageStore.pageIsLoading ? (<p>Loading ... </p>):(
                healthPageStore.pageStore.pageError ?  <Error error ={healthPageStore.pageStore.pageError}/> :
                    <>
                        <MainHeader title = {healthPageStore.pageStore.pageInfo?.title}
                                    poweredBy = {healthPageStore.pageStore.pageInfo?.poweredBy}
                                    text={healthPageStore.pageStore.pageInfo?.text}
                                    imageURL = {healthPageStore.pageStore.pageInfo?.imageUrl}
                                    indicators = {homeIndicatorsPageStore.indicators.find((indicator)=>indicator.title === "Health")?.indicators}

                        />

                    </>
            )}
        </div>
        )
}
export default  compose(inject("healthPageStore","homeIndicatorsPageStore"))(observer(HealthPage))
