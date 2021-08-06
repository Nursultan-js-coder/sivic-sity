import {createSlice} from "@reduxjs/toolkit";
import React from "react";
import {getMarkers} from "../common/utils";
// import {apiClient} from "../../api/apiClient";
const adminInitState = {
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

export const adminReducer = createSlice({
    name:"admin",
    initialState:adminInitState,
    reducers:{
        pageInfoLoaded(state,action){
        state.pageInfo = action.payload;
        console.log("loaded admin page info:",state.pageInfo)
        },
        mapInfoLoaded(state,action){
            state.mapInfo.coordinates = action.payload;
            console.log("loaded admin map store in reducer:",state.mapInfo.coordinates);
        },
        loading(state,action){
            console.log("loading admin page info")
            state.loading = action.payload;
        },
        loadedInstitutionTypes(state,action){
            state.institutionType = action.payload;
            console.log("loading admin institution type loaded",state.institutionType);

        },
        errorOccurred(state,action){
            state.error = action.payload;
            console.log("error occurred on page info ")

        },
        markersLoaded(state,action){
            console.log("data :",action.payload);
            state.markers = getMarkers(action.payload,state.institutionType);
        }


    }
})

export const {pageInfoLoaded, loading, errorOccurred,mapInfoLoaded,loadedInstitutionTypes,markersLoaded} = adminReducer.actions;
export default adminReducer.reducer;


export const  fetchData = (slice,apiCalls) =>(dispatch, getData)=>{
    console.log("slice:",slice);
    apiCalls.forEach(apiCall=>{
        dispatch(slice.actions['loading'](true));
        apiCall.apiCall().then(response=>response.data)
            .then(data=>{
                dispatch(slice.actions[apiCall.reducer](data));
                console.log("loaded map info data :",data)
                apiCall.reducer === "mapInfoLoaded" && dispatch(slice.actions['markersLoaded'](data))
            })
            .catch(err=>{
                dispatch(slice.actions['errorOccurred'](err.message))
            })
            .finally(()=>dispatch(slice.actions['loading'](false)))
    })
}



