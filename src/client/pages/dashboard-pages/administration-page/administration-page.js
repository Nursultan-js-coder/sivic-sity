import React, {useEffect} from "react";
import MainHeader from "../../../components/MainHeader"
import Dashboards from "../../../components/MainContent"
import {inject, observer} from "mobx-react";
import {compose} from "recompose";
import Error from "../../../components/common/Error";

function AdministrationPage({administrationPageStore,homeIndicatorsPageStore}){
    useEffect(() => {
        administrationPageStore.pullPage();
        return () => {
            administrationPageStore.resetPage();
        };
    }, []);

    return (
        <div className="safety-page">
            {administrationPageStore.pageStore.pageIsLoading ? (<p>Loading ... </p>):(
                administrationPageStore.pageStore.pageError ?  <Error error ={administrationPageStore.pageStore.pageError}/> :
                    <>
                        <MainHeader title = {administrationPageStore.pageStore.pageInfo?.title}
                                    poweredBy = {administrationPageStore.pageStore.pageInfo?.poweredBy}
                                    text={administrationPageStore.pageStore.pageInfo?.text}
                                    imageURL = {administrationPageStore.pageStore.pageInfo?.imageUrl}
                                    indicators = {homeIndicatorsPageStore.indicators.find((indicator)=>indicator.title === "Administration")?.indicators}
                        />
                    </>
            )}
        </div>)
}
export default  compose(inject("administrationPageStore","homeIndicatorsPageStore"))(observer(AdministrationPage))
