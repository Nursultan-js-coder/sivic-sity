import {faSmile, faDizzy, faFrown, faMeh, faMehBlank, faTired, faSmileBeam} from "@fortawesome/free-regular-svg-icons";
import React from "react"

export const getAqiIcon = (rate,type)=>{
    const rates = [
        {
            status:"#889d02",
            min: 0,
            max:50,
            icon:faSmile
        },  {
            status:"#d8ab03",
            min: 51,
            max:100,
            icon:faMeh
        },  {
            status:"#f04403",
            min: 101,
            max:151,
            icon:faFrown
        },  {
            status:"#aa00ff",
            min: 151,
            max:200,
            icon:faMeh
        },
        {
            status:"#5b00ff",
            min: 200,
            max:99999,
            icon:faMeh
        },
    ]

    if(type === "status")
    return rates.find((rateItem) => (rate >= rateItem.min && rate <= rateItem.max))?.status;
    return rates.find((rateItem) => (rate >= rateItem.min && rate <= rateItem.max))?.icon;


}

export const  imageComposer = (imageURL) =>{
    const BASE_API = "https://api.citydata.kg";
    return BASE_API+imageURL;
}
