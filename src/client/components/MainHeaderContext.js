import React, {useEffect} from "react";
import {inject, observer} from "mobx-react";
import {compose} from "recompose";
import Error from "./common/Error";

function MainHeaderContext({safetyPageStore,title,poweredBy,text}){
    useEffect(() => {

    }, []);

    return (
        <>
            {
                safetyPageStore.pageStore.error ? <Error error={safetyPageStore.pageStore.error}/> :safetyPageStore.pageStore.pageIsLoading ? <p> loading ... </p>:(
                    <div style={{padding:20}}>
                        <div style={{borderLeft:"5px solid #375765",paddingLeft:20}}>
                            <h3 > {title}</h3>
                            <p className="text-muted tex" > powered by {poweredBy}</p>
                        </div>
                        <div style={{fontSize:12}}>
                            {text}
                        </div>
                    </div>
                )}
        </>
    )
}
export default compose(inject("safetyPageStore"))(observer(MainHeaderContext));