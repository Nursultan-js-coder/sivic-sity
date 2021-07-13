import React from "react";
import img1  from "../../../assets/img/Dynamic1.svg"
import img2  from "../../../assets/img/Dynamic2.svg"
import PieChart from "./PieChart";

function DynamicIndicators(){

    return (
        <>
       <div className="d-flex flex-row">
           <div className={"dynamic-card"}>
               <PieChart/>
           </div>
           <div className="dynamic-card">
               <PieChart/>

           </div>
       </div>
        </>
    )
}

export default DynamicIndicators