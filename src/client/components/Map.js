import React from "react";
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import {mtuData} from "../data/mtu";
import "./map.css";
import {highlightStyle, mtuAreaStyle} from "./styles";
import L from "leaflet";



function onEachFeature(feature, layer) {
    const noData = 'Нет данных';
    layer.bindTooltip(feature.properties.name, {permanent: true, direction: 'center', className: 'mtuLabel'});
    layer.bindPopup(`
    ${feature.properties.name}<br>
    Площадь: ${Math.floor(feature.properties.Area ).toString()?? noData}<br>
    `);
    layer.on({
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
    });

}

function handleMouseOver(e) {
    const layer = e.target;
    layer.setStyle(highlightStyle);
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    layer.openPopup();
}

function handleMouseOut(e) {
    const layer = e.target;
    layer.setStyle(mtuAreaStyle(e.target.feature));
    layer.closePopup();
}

const MapSoros = () => {
    const BishkekCoordinates = [42.88, 74.61];
    const zoom = 14;
    const minZoom = 12;
    const bounds = [
        [42.9785, 74.3939],
        [42.7843, 74.8455]
    ];

    return (
        <div className="centerify">

        <Map
            className="markercluster-map "
            center={BishkekCoordinates}
            bounds={bounds}
            maxBounds={bounds}
            zoom={zoom}
            minZoom={minZoom}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                // url='https://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU'
                // subdomains={['01', '02', '03', '04']}
                reuseTiles={true}
                updateWhenIdle={false}
            />

            <GeoJSON
                data={mtuData}
                style={mtuAreaStyle}
                onEachFeature={onEachFeature}
            >
            </GeoJSON>

        </Map>
        </div>

    );
}

export default MapSoros;
