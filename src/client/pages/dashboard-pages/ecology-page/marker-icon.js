import L from 'leaflet';
import React from "react"
import {getAqiIcon} from "../../../utils";
export  const markerIcon =(aqius)=> L.divIcon({
    html:'<div><span>'+aqius+'</span></div>',
    className:"cluster-marker-icon "+getAqiIcon(aqius,"class"),
    iconSize:new L.Point(40,40)

})