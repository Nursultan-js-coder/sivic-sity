import {faSmile, faDizzy, faFrown, faMeh, faMehBlank, faTired, faSmileBeam} from "@fortawesome/free-regular-svg-icons";
import React from "react"

export const getAqiIcon = (rate,type)=>{
    const rates = [
        {
            status:"#889d02",
            min: 0,
            max:50,
            icon:faSmile,
            class:"cluster-marker-icon-1"
        },  {
            status:"#d8ab03",
            min: 51,
            max:100,
            icon:faMeh,
            class:"cluster-marker-icon-2"

        },  {
            status:"#f04403",
            min: 101,
            max:151,
            icon:faFrown,
            class:"cluster-marker-icon-3"

        },  {
            status:"#aa00ff",
            min: 151,
            max:200,
            icon:faMeh,
            class:"cluster-marker-icon-4"

        },
        {
            status:"#5b00ff",
            min: 200,
            max:99999,
            icon:faMeh,
            class:"cluster-marker-icon-5"

        },
    ]
     if(type === "class")
         return rates.find((rateItem) => (rate >= rateItem.min && rate <= rateItem.max))?.class;
     else if(type === "status")
     return rates.find((rateItem) => (rate >= rateItem.min && rate <= rateItem.max))?.status;
     return rates.find((rateItem) => (rate >= rateItem.min && rate <= rateItem.max))?.icon;


}

export const  imageComposer = (imageURL) =>{
    const BASE_API = "https://api.citydata.kg";
    return BASE_API+imageURL;
}


export const createTooltipContent = (coordinate,occasions) =>{
    let occasion = occasions.find(occ =>occ.id === coordinate.finOccasionId)?.name
    return `MTU-${coordinate.mtuId} <br>
        Illness type:${occasion}<br>
        Date:${new Date(coordinate.dateTime).toLocaleDateString()}<br>
        Time:${new Date(coordinate.dateTime).toLocaleTimeString()}<br>
`
}