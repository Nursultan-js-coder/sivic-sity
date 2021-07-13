import React from "react";
import Indicator from "./Indicator"
import health from "../assets/img/health-sidebar-img.svg"
import administration from "../assets/img/administration-sidebar-img.svg"
import ecology from "../assets/img/ecology-sidebar-img.svg"
import safety from "../assets/img/safety-sidebar-icon.svg"
import {v4 } from "uuid"
const indicators =[
    {
        title:"Ecology",
        img:ecology,
        path:"/home/ecology-page"
    }, {
        title:"Health",
        img:health,
        path:"/home/health-page"
    }, {
        title:"Safety",
        img:safety,
        path:"/home/safety-page"
    },{
        title:"Administration",
        img:administration,
        path:"/home/administration-page"

    },
]

function SideBar(){
    return (<div className={"sidebar d-flex flex-column"}>
        {
            indicators.map(({img,title,path})=><Indicator key={v4()} img={img} title={title} path={path} />)
        }

    </div>)
}
export default  SideBar;
