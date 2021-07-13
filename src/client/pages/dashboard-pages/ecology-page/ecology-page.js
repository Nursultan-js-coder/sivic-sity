import React, {useEffect} from "react";
import MainHeader from "../../../components/MainHeader"
import MainContent from "../../../components/MainContent"
import {inject, observer} from "mobx-react";
import {compose} from "recompose";
import Error from "../../../components/common/Error";

function EcologyPage({ecologyPageStore}){
    useEffect(() => {
        ecologyPageStore.pullPage();
        return () => {
            ecologyPageStore.resetPage();
        };
    }, []);

    return (
        <div className="safety-page">
            {ecologyPageStore.pageStore.pageIsLoading ? (<p>Loading ... </p>):(
                ecologyPageStore.pageStore.pageError ?  <Error error ={ecologyPageStore.pageStore.pageError}/> :
                    <>
                        <MainHeader title = {ecologyPageStore.pageStore.pageInfo?.title}
                                    poweredBy = {ecologyPageStore.pageStore.pageInfo?.poweredBy}
                                    text={ecologyPageStore.pageStore.pageInfo?.text}
                                    imageURL = {ecologyPageStore.pageStore.pageInfo?.imageUrl}
                        />
                        <MainContent/>
                    </>
            )}
        </div>)
}
export default  compose(inject("ecologyPageStore"))(observer(EcologyPage))
