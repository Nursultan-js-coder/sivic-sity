import MarkerClusterGroup from "react-leaflet-markercluster";
import React from "react";
import {store}  from "../../../store"
import {Marker, Tooltip} from "react-leaflet";
import {Icon} from "leaflet/dist/leaflet-src.esm";

export const markers=()=>{
    return (
        <MarkerClusterGroup>
            {store.getState().admin.mapInfo.coordinates.map((coordinate)=>{
                let institutionType = store.getState().admin.institutionTypes.find(inst=>inst.id === coordinate.institutionTypeId)?. name ?? "No Data"
                let markerIconPng;
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