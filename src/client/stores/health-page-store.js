import React from "react"
import {action, computed, makeAutoObservable, makeObservable, observable} from "mobx";
import CommonPageStore from "./common-page-store";
import {apiClient} from "../api/apiClient";
import MapStore from "./mapStore";
import {observer} from "mobx-react";
import Markers from "../components/MarkerCluster/Markers"
import MarkerClusterGroup from "react-leaflet-markercluster";
import {Marker, Tooltip} from "react-leaflet";
import {Icon} from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"



class HealthPageStore{
    pageStore = new CommonPageStore(apiClient.healthPage.get)
    mapStore = new MapStore(apiClient.healthPage.coordinatesLocal);
    occasions= [];
    constructor(){
        makeObservable(this,{
            pageStore:false,
            pullPage:false,
            resetPage:false,
            occasions:observable,
            pullOccasions:action,
            createTooltipContent:computed,
            markers:computed
        });
    }
     pullPage(){
         this.pullOccasions();
         this.mapStore.pullCoordinates();
         this.pageStore.pullPageInfo();
    }
    resetPage(){
        this.pageStore.resetError();
        this.mapStore.resetError()
    }
    get createTooltipContent(){

    }
    pullOccasions(){
        this.pageStore.pageIsLoading = true;
        return apiClient.healthPage.occasions()
            .then(action((res)=>{
                this.occasions = res.data;
            }))
            .catch(action(err=>this.errors=err))
            .finally(action(()=>{
                this.pageStore.pageIsLoading = false;
            }))
    }

    get markers() {
        return (
            <MarkerClusterGroup>
                {this.mapStore.coordinates.map((coordinate)=>{
                    let occasion = this.occasions.find(occ =>occ.id === coordinate.finOccasionId)?.name

                    return (
                        <Marker position={[coordinate.latitude,coordinate.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                            <Tooltip>
                                {`MTU-${coordinate.mtuId} <br>
                                Illness type:${occasion}<br>
                                Date:${new Date(coordinate.dateTime).toLocaleDateString()}<br>
                                Time:${new Date(coordinate.dateTime).toLocaleTimeString()}<br>
                                `  }
                                </Tooltip>
                        </Marker>
                    )
                })}
                )
                })}

            </MarkerClusterGroup>
        )
    }



}

export default new HealthPageStore();