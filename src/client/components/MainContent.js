import React, {useEffect} from "react"
import MyMap from "../components/map/MyMap"
import {Card} from "react-bootstrap";
import Markers from "./MarkerCluster/Markers";



function MainContent(){
    useEffect(()=>{

    },[])
    return(
        <Card>
            <MyMap>
            {/*<Markers/>*/}
            </MyMap>
        </Card>

    )
}

export default MainContent;