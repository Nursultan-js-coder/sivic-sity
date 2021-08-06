import React, {useEffect} from "react"
import MyMap from "../components/map/MyMap"
import {Card} from "react-bootstrap";
import {getMarkers} from "../features/common/utils";
// import Markers from "./MarkerCluster/Markers";



function MainContent({mapLoading,markers}){
    console.log("markers:",markers)
    return (
        <Card>
            {mapLoading ? <p>Loading ...</p> :( <MyMap mapLoading={mapLoading}>
                {markers}
            </MyMap>)}
        </Card>

    )
}

export default MainContent;