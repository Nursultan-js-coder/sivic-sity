import {action, makeAutoObservable} from "mobx";


class MapStore {
    coordinatesLoading = false;
    coordinates= undefined;
    errors = undefined;
    constructor(apiCall) {
        makeAutoObservable(this,{
            apiCall:false
        })

        this.apiCall = apiCall;
    }

     pullCoordinates(){
       this.errors = undefined;
       this.coordinatesLoading = true;
        this.apiCall()
           .then(action((res)=>{
               this.coordinates = res.data;
               console.log("coordinates:",this.coordinates)
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
