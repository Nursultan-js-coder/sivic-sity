import {action, makeAutoObservable} from "mobx";


class MapStore {
    coordinatesLoading = false;
    coordinates= undefined;
    errors = undefined;
    constructor(apiCall) {
        this.coordinates = []
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
               console.log("coordinates of map",this.coordinates)
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
