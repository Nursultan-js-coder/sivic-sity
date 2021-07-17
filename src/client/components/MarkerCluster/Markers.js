import MarkerClusterGroup from "react-leaflet-markercluster"
import "react-leaflet-markercluster/dist/styles.min.css"
import "react-leaflet-markercluster/src/styles.scss"
import React, {useEffect, useState} from "react"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import {Marker, Popup, Tooltip} from "react-leaflet";


function Markers(){


    return (
        <MarkerClusterGroup>
                    <Marker position={[20,20]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                        <Tooltip>
                            <p>MTU-default</p>
                            <p>Occasion:nodata</p>
                        </Tooltip>
                    </Marker>
                )
            })}

        </MarkerClusterGroup>
    )
}

export default Markers
