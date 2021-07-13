import {faSmile, faDizzy, faFrown, faMeh, faMehBlank, faTired, faSmileBeam} from "@fortawesome/free-regular-svg-icons";
import React from "react"

export const getAqiIcon = (rate)=>{
    const rates = [
        {
            status:"green",
            min: 0,
            max:50,
            icon:faSmile
        },  {
            status:"yellow",
            min: 51,
            max:100,
            icon:faMeh
        },  {
            status:"red",
            min: 101,
            max:151,
            icon:faFrown
        },  {
            status:"purple",
            min: 151,
            max:200,
            icon:faMeh
        },
    ]


    let  res = rates.find((rateItem) => (rate >= rateItem.min && rate <= rateItem.max))?.icon;
    return res ;


}

export const  imageComposer = (imageURL) =>{
    const BASE_API = "https://api.citydata.kg";
    return BASE_API+imageURL;
}
