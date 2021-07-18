import {action, makeAutoObservable} from "mobx";


class MapStore {
    coordinatesLoading = false;
    coordinates= [];
    errors = undefined;
    constructor(apiCall) {
        this.apiCall = apiCall;
        makeAutoObservable(this,{
            apiCall:false
            }
        )
    }

     pullCoordinates(){
       this.errors = undefined;
       this.coordinatesLoading = true;
        return this.apiCall()
           .then(action((res)=>{
               this.coordinates = res.data;
           }))
           .catch(action((error)=> {
            this.errors = error;
           }))
           .finally(action(()=>{
               this.coordinatesLoading = false;
           }))
    }
    resetError(){
        this.errors = undefined;
    }

}
export default MapStore;
