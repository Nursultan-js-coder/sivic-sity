import React from "react";
import "../features/safety/main-header.css"
import {imageComposer} from "../utils"

function MainHeaderImage({imageURL}){
    return (
        <img src={imageComposer(imageURL)} alt="car-image" className="mt-2 main-header-image  mb-5"/>
    )
}
export default MainHeaderImage;