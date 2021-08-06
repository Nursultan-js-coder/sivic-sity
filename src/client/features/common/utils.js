import {getAqiIcon} from "../../utils";
import {calculateDynamic} from "../../stores/home-indicators-page-store";
import {indicatorsLoaded} from "../common"
import MarkerClusterGroup from "react-leaflet-markercluster";
import {Marker, Tooltip} from "react-leaflet";
import {Icon} from "leaflet";
import React from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png"


export const getIndicators=()=>(dispatch,getState)=>{
    const state = getState().common;
    console.log("indicators:",)
    const noData = "No Data";
    let indicators = [
        {
            title:"Ecology",
            path:"/ecology-page",
            subtitle:"AQI rate for month",
            bg:"#4391DB",

            indicators:[

                {
                    rate:state.ecology?.today ?? noData,
                    text:" AQI today",
                    icon: getAqiIcon(state.ecology?.today,"icon")
                },
                {
                    rate:state.ecology?.thisMonth ?? noData,
                    text:" AQI current month",
                    icon: getAqiIcon(state.ecology?.thisMonth,"icon")


                } ,
                {
                    rate:state.ecology?.lastMonth?? noData,
                    text:" AQI last month",
                    icon: getAqiIcon(state.ecology?.lastMonth,"icon")


                }]
        },
        {
            title:"Health",
            path:"/health-page",
            bg:"#45B85F",
            subtitle:"Emergency call quantity",
            indicators:[

                {
                    bigRate:state.health?.last7Days ?? noData,
                    text:"this week"
                },
                {
                    bigRate:state.health?.between7And14Days ?? noData,
                    text:"last week"
                },
                {
                    dynamic:calculateDynamic( parseInt(state.health?.last7Days),parseInt(state.health?.between7And14Days)) ?? 0,
                    text:"dynamic"
                }


            ]
        },
        {
            title:"Safety",
            path:"/safety-page",
            bg:"#32A0AF",
            subtitle:"Accident quantity",
            indicators:[
                {
                    bigRate:state.safety?.last7Days?? noData,
                    text:"state week"

                },
                {
                    bigRate:state.safety?.between7And14Days ?? noData,
                    text:"last week"
                } ,
                {
                    // dynamic:calculateDynamic(parseInt(this.safety?.last7Days),parseInt(this.safety?.between7And14Days)) ?? 0,
                    dynamic: 0,
                    text:"dynamic"
                }
            ]
        },
        {
            title:"Administration",
            bg:"#A544A1",
            path:"/administration-page",
            subtitle:"Accident quantity",
            indicators:[
                {
                    bigRate:state.administration?.primarySchool?? noData,
                    text:"Primaty Schools"
                },
                {
                    bigRate:state.administration?.preSchool ?? noData,
                    text:"Preporation Schools"

                }]
        }
    ]
    dispatch(indicatorsLoaded(indicators));

}

export const  getMarkers=(coordinates,institutionTypes)=> {
    return (
        <MarkerClusterGroup>
            {coordinates.map((coordinate)=>{
                let institutionType = institutionTypes.find(inst=>inst.id === coordinate.institutionTypeId)?. name ?? "No Data"
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