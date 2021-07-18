import React, {useEffect} from "react"
import MyMap from "../components/map/MyMap"
import {Card} from "react-bootstrap";
import Markers from "./MarkerCluster/Markers";



function MainContent({markers,mapLoading}){
    return (
        <Card>
            <MyMap mapLoading={mapLoading}>
                {markers}
            </MyMap>
        </Card>

    )
}

export default MainContent;