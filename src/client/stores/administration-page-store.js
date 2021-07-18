
import {action, makeAutoObservable} from "mobx";
import CommonPageStore from "./common-page-store";
import {apiClient} from "../api/apiClient";
import MapStore from "./mapStore";
import {Marker, Tooltip} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import {createTooltipContent} from "../utils";
import MarkerClusterGroup from "react-leaflet-markercluster";
import React from "react";


class AdministrationPageStore {
    pageStore = new CommonPageStore(apiClient.administration.get);
    mapStore = new MapStore(apiClient.administration.coordinates)
    institutionTypes = []


    constructor() {
        makeAutoObservable(this, {
            pageStore: false,
            mapStore: false
        });
    }

    pullPage() {
        this.pullInstitutionTypes();
        this.pageStore.pullPageInfo();
        this.mapStore.pullCoordinates();
    }

    resetPage() {
        this.pageStore.resetError();
        this.mapStore.resetError();
    }

    pullInstitutionTypes() {
        this.pageStore.pageIsLoading = true;
        return apiClient.administration.institutionTypes()
            .then(action((res) => {
                this.institutionTypes = res.data;
            }))
            .catch((err) => {
                this.pageStore.pageError = err;
            })
            .finally(action(() => {
                this.pageStore.pageIsLoading = false;
            }))
    }

    get markers() {
        return (
            <MarkerClusterGroup>
                {this.mapStore.coordinates.map((coordinate)=>{
                  let institutionType = this.institutionTypes.find(inst=>inst.id === coordinate.institutionTypeId)?. name ?? "No Data"
                    return (
                        <Marker position={[coordinate.latitude,coordinate.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                            <Tooltip>
                                {`MTU :${coordinate.mtuId}`}<br/>
                                {`institution type:${institutionType}`}<br/>
                                {`institution name:${coordinate.name}`}<br/>
                            </Tooltip>
                        </Marker>
                    )
                })}


            </MarkerClusterGroup>
        )
    }
}




    export default new AdministrationPageStore();