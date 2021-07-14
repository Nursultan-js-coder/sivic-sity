
import {makeAutoObservable} from "mobx";
import CommonPageStore from "./common-page-store";
import {apiClient} from "../api/apiClient";


class AdministrationPageStore{
    pageStore = new CommonPageStore(apiClient.administration.get);

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

export default new AdministrationPageStore();