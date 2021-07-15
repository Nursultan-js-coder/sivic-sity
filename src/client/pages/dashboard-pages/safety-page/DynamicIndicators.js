import React from "react";
import {Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {getAqiIcon, getStatus} from "../../../utils"
import {faMeh, faSmile} from "@fortawesome/free-regular-svg-icons";


function DynamicIndicators({indicators}){

    return (
        <>
            <div className="all-indicators">

                {indicators.map((indicator)=>{
                    const status = indicator?.rate ?  getAqiIcon(indicator.rate,"status"): indicator?.dynamic ? funStat(indicator.dynamic): getAqiIcon(indicator.bigRate,"status") ;
                    const style = indicator.dynamic ? {width:"50%"}  : {width:"90%"}

                    return (
                        <div  className="page-indicator mt-10" style={style} >

                            {indicator?.dynamic ? (
                                <p className="mt-4 p-2" style={{borderRadius:"50%",backgroundColor:status,color:"#fff",
                                    fontSize:"1.3rem",width:50,height:50}}>{indicator?.dynamic}%</p>
                            ) : indicator?.rate ? (<p  className="mt-4 p-2 " style={{width:50,height:50,borderRadius:"50%",
                                    backgroundColor:status,color:"#fff",fontSize:"1.3rem"}}>{indicator.rate}</p>) :
                                (  <p className="mt-4 p-2" style={{borderRadius:"50%",backgroundColor:status,color:"#fff",padding:3,
                                    fontSize:"1.3rem",width:60,height:60}}>{indicator?.bigRate}</p>)}

                            <div sm={6} >
                                <p style={{fontSize:"1rem"}} className="mt-3">{indicator?.text}</p>

                            </div>
                            <div sm={4}>
                                <FontAwesomeIcon icon={indicator?.icon} color={status} size="4x" className="mt-2"/>
                            </div>
                        </div>
                    )
                })}

            </div>

        </>
    )
}

export default DynamicIndicators

function funStat(dynamic){
    if(dynamic > 0){
        return "#f04403"
    }
    else return "#889d02"
}

