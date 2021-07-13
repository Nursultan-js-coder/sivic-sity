import React,{useEffect} from "react";
import {Link} from "react-router-dom";


function Indicator({img,title,path}){
    useEffect(()=>{
    },[])
    return (
        <Link className="indicator" to={path}>
            <img src={img} alt={title} className="img-fluid"/>
          <p>{title}</p>
        </Link>
    )
}
export default  Indicator;