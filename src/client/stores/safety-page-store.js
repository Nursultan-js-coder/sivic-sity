import {makeAutoObservable} from "mobx";
import CommonPageStore from "./common-page-store";
import {apiClient} from "../api/apiClient";


class SafetyPageStore{
    pageStore = new CommonPageStore(apiClient.safetyPage.get);

    constructor(){
        makeAutoObservable(this,{
            pageStore:false
        });
    }

    pullPage(){
        this.pageStore.pullPageInfo();
    }
    resetPage(){
        this.pageStore.resetError();
    }
}

export default new SafetyPageStore();