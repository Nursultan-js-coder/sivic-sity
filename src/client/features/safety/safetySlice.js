import {createSlice} from "@reduxjs/toolkit";
import React from "react";
import {getMarkers} from "../common/utils";

const safetyInitState = {
    error:null,
    loading:false,
    pageInfo:null,
    mapInfo:{
        coordinates:{}
    },
    institutionType:[],
    indicators:undefined,
    markers:undefined
};

export const safetyReducer = createSlice({
    name:"safety",
    initialState:safetyInitState,
    reducers:{
        pageInfoLoaded(state,action){
            state.pageInfo = action.payload;
        },
        mapInfoLoaded(state,action){
            state.mapInfo.coordinates = action.payload;
        },
        loading(state,action){
            state.loading = action.payload;
        },
        loadedInstitutionTypes(state,action){
            state.institutionType = action.payload;
        },
        errorOccurred(state,action){
            state.error = action.payload;
        },
        markersLoaded(state,action){
            state.markers = getMarkers(action.payload,state.institutionType);
        }
    }
})

export const {pageInfoLoaded, loading, errorOccurred,mapInfoLoaded,loadedInstitutionTypes,markersLoaded} = safetyReducer.actions;
export default safetyReducer.reducer;

export const  fetchData = (slice,apiCalls) =>(dispatch, getData)=>{
    console.log("slice:",slice);
    apiCalls.forEach(apiCall=>{
        dispatch(slice.actions['loading'](true));
        apiCall.apiCall().then(response=>response.data)
            .then(data=>{
                dispatch(slice.actions[apiCall.reducer](data));
                apiCall.reducer === "mapInfoLoaded" && dispatch(slice.actions['markersLoaded'](data))
            })
            .catch(err=>{
                dispatch(slice.actions['errorOccurred'](err.message))
            })
            .finally(()=>dispatch(slice.actions['loading'](false)))
    })
}



