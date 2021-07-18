
import {action, computed, makeAutoObservable, makeObservable, observable} from "mobx";
import CommonPageStore from "./common-page-store";
import {apiClient} from "../api/apiClient";
import MapStore from "./mapStore"
import MarkerClusterGroup from "react-leaflet-markercluster";
import {Marker, Tooltip} from "react-leaflet";
import {Icon} from "leaflet";
import React from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {markerIcon} from "../pages/dashboard-pages/ecology-page/marker-icon"
import { toJS } from 'mobx'

// example

class EcologyPageStore{
    pageStore = new CommonPageStore(apiClient.ecologyPage.get);
    mapStore = new MapStore(apiClient.ecologyPage.coordinatesLocal);
    constructor(){
        makeAutoObservable(this,{
            pageStore:false,
            pullPage:false,
            mapStore:false,
            resetPage:false,
            markers:computed,
        });
    }

    pullPage(){
        this.pageStore.pullPageInfo();
        this.mapStore.pullCoordinates()
    }
    resetPage(){
        this.pageStore.resetError();
        this.mapStore.resetError();
    }



    get markers(){

        return (
           <>
                {this.mapStore.coordinates.map((coordinate) => {
                    const {aqius} = coordinate ;
                    const {sourceName} = coordinate  ;
                    return (
                        <Marker position={[coordinate.latitude, coordinate.longitude]}
                                icon={markerIcon(aqius)}>
                        >
                            <Tooltip>
                                {sourceName}
                            </Tooltip>
                        </Marker>
                    )
                })}

            </>
        )
    }
}

export default new EcologyPageStore();