
import {makeAutoObservable} from "mobx";
import CommonPageStore from "./common-page-store";
import {apiClient} from "../api/apiClient";


class HealthPageStore{
    pageStore = new CommonPageStore(apiClient.healthPage.get);

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

export default new HealthPageStore();