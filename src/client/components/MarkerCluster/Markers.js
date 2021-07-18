import MarkerClusterGroup from "react-leaflet-markercluster"
import "react-leaflet-markercluster/dist/styles.min.css"
import "react-leaflet-markercluster/src/styles.scss"
import React, {useEffect, useState} from "react"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import {Marker, Popup, Tooltip} from "react-leaflet";
import {createTooltipContent} from "../../utils"


function Markers({coordinates,occasions}){
console.log("occasions:",occasions);

    return (
        <MarkerClusterGroup>
            {coordinates.map((coordinate)=>{

                return (
                    <Marker position={[coordinate.latitude,coordinate.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                        <Tooltip>
                            {createTooltipContent(coordinate,occasions)  }
                        </Tooltip>
                    </Marker>
            )
            })}
            )
            })}

            </MarkerClusterGroup>
            )
            }

            export default Markers
