import React, { Component } from "react";
import {Map, GeoJSON, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import {mtuData} from "./mtu";
import {mtuStyle} from "./styles.js"
import {highlightStyle} from "./styles";
import {originalStyle} from "./styles";


function MyMap() {

  const BishkekCoordinates = [42.88, 74.61];
  const zoom = 11.39;
  const minZoom = 12;
  const bounds = [
    [42.9785, 74.3939],
    [42.7843, 74.8455]
  ];
  const mouseoverHandle = (event) =>{
event.target.openPopup();
event.target.setStyle(highlightStyle)
  }
  const handleMouseout = (event)=>{
    event.target.setStyle(originalStyle)
  }


  const onEachCountry = (mtu, layer) => {
    const mtuName = mtu.properties.name;
    const medical = mtu.properties.name;
    const population = mtu.properties.Population;
    const area = mtu.properties.Area;
    const perimeter = mtu.properties.Perimeter;
    const rayon = mtu.properties.rayon;
    layer.bindTooltip(mtuName,{permanent:true,className:"mtuLabel",direction:"center"})
    console.log(mtuName);
    layer.bindPopup(`MTU ${mtuName}:<br>
Population:${population}<br/>
Medical : ${medical}<br>
Rayon :${rayon}<br>
Area : ${area}<br> 
Perimeter : ${perimeter}
`);
    layer.on({
      mouseover:mouseoverHandle,
      mouseout:handleMouseout
    });
  };



    return (
    <>
        <Map style={{ height: "40vh",width:"100%" ,maxHeight:"40vh"}} zoom={zoom} minZoom={minZoom} bounds={bounds} id = "map"center={BishkekCoordinates}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              // url='https://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU'
              // subdomains={['01', '02', '03', '04']}
              reuseTiles={true}
              updateWhenIdle={false}
          />

          <GeoJSON
            style={mtuStyle}
            data={mtuData}
            onEachFeature={onEachCountry}
          />
        </Map>
    </>
    )

}

export default MyMap;
