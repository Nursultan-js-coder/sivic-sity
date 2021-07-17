import {action, computed, makeAutoObservable, makeObservable, observable} from "mobx";
import {observer} from "mobx-react";


class CommonPageStore{
    pageInfo = undefined;
    pageError = undefined ;
    pageIsLoading= undefined ;
    apiCall = undefined;

    constructor(apiCall) {
        this.apiCall=apiCall;
        makeObservable(this,{
            pageInfo : observable,
            pageError:observable ,
            pageIsLoading :observable,
            apiCall :false
        })
    }

    resetError(){
        this.pageError = undefined;
    }

    pullPageInfo(){
        if(this.pageInfo)return;
        this.pageIsLoading= true;
        return this.apiCall().then(action(async(res)=>{
            this.pageInfo = res.data;

        }))
            .catch(action((err)=>{
                this.pageError = err.message;
            }))
            .finally(action(()=>{
              this.pageIsLoading = false;
        }))
    }

}

export default CommonPageStore;