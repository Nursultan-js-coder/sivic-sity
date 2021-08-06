import {getIndicators} from "./utils";
import {apiClient} from "../../api/apiClient";

const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    safety  : undefined,
    health: undefined,
    administration: undefined,
    ecology : undefined,
    pageLoading :undefined,
    loading:false,
    error:null,
    indicators:undefined
}
const commonSlice = createSlice({
    name:"common",
    initialState:initialState,
    reducers:{
        indicatorsPulled(state,action){
                state.safety =action.payload.health;
                state.health =action.payload.health;
                state.administration= action.payload.administration ;
                state.ecology = action.payload.ecology;
        },
        loading(state,action){
            state.loading = action.payload;
        },
        errorOccurred(state,action){
            state.error = action.payload;
        },
        indicatorsLoaded(state,action){
            state.indicators = action.payload;
            console.log("loaded indicators :",state.indicators)
        }

    }

})

export const {indicatorsPulled,loading,errorOccurred,indicatorsLoaded} =  commonSlice.actions;
export default commonSlice.reducer;

export const pullPageInfo =(apiCall)=> (dispatch,getState)=>{
    dispatch(loading(true));
    apiCall()
        .then(res=>res.data)
        .then(data=>dispatch(indicatorsPulled(data)))
        .then(()=>{
            dispatch(getIndicators());
        })
        .catch(err=>dispatch(errorOccurred(err.message)))
        .finally(()=>console.log("indicators loaded :",getState().common.indicators) || dispatch(loading(false)));

}

