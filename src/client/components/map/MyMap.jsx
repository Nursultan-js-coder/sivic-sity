import React, { Component } from "react";
import {MapContainer, GeoJSON, TileLayer,useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import {mtuData} from "./mtu";
import {mtuStyle} from "./styles.js"
import {highlightStyle} from "./styles";
import {originalStyle} from "./styles";
import {observer} from "mobx-react";

const MapControl = React.memo(() => {
  let mapRef = useMap();
  mapRef.options.maxBoundsViscosity = 1;

  return null;
});

const LoadingControl = observer(({isLoading}) => {
  let mapRef = useMap();
  if (!mapRef.spin) return null;
  if (isLoading) mapRef.spin(true);
  else mapRef.spin(false);
  return null;
});


function MyMap({children,mapLoading}) {

  const BishkekCoordinates = [42.88, 74.61];
  const zoom = 11.29;
  const minZoom = 11.29;
  const bounds = [
    [42.9785, 74.3939],
    [42.7843, 74.8455]
  ];
  const mouseoverHandle = (event) =>{
    // event.target.openPopup();
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
    layer.bindPopup(`MTU-${mtuName}:<br>
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
        <MapContainer style={{ height: "60vh",width:"100%" ,maxHeight:"60vh"}} zoom={zoom} minZoom={minZoom} bounds={bounds} center={BishkekCoordinates}>
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
          <LoadingControl isLoading={mapLoading}/>

          {children}
          <MapControl/>
        </MapContainer>
      </>
  )

}

export default MyMap;
