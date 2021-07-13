import React, {useEffect} from "react";
import MainHeader from "../../../components/MainHeader"
import MainContent from "../../../components/MainContent"
import {inject, observer} from "mobx-react";
import {compose} from "recompose";
import Error from "../../../components/common/Error";

function SafetyPage({safetyPageStore}){
    useEffect(() => {
        safetyPageStore.pullPage();
        return () => {
            safetyPageStore.resetPage();
        };
    }, []);

    return (
        <div className="safety-page">
            {safetyPageStore.pageStore.pageIsLoading ? (<p>Loading ... </p>):(
                safetyPageStore.pageStore.pageError ?  <Error error ={safetyPageStore.pageStore.pageError}/> :
                <>
                    <MainHeader title = {safetyPageStore.pageStore.pageInfo?.title}
                                poweredBy = {safetyPageStore.pageStore.pageInfo?.poweredBy}
                                text={safetyPageStore.pageStore.pageInfo?.text}
                                imageURL = {safetyPageStore.pageStore.pageInfo?.imageUrl}
                    />
                    <MainContent/>
                </>
            )}
        </div>)
}
export default  compose(inject("safetyPageStore"))(observer(SafetyPage))
