
import {action, makeAutoObservable, makeObservable} from "mobx";
import CommonPageStore from "./common-page-store";
import {apiClient} from "../api/apiClient";
import MapStore from "./mapStore";


class HealthPageStore{
    pageStore = undefined;
    constructor(){
        this.pageStore = new CommonPageStore(apiClient.healthPage.get)
        makeObservable(this,{
            pageStore:false,
            pullPage:false,
            resetPage:false
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