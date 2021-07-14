import React from "react";
import {Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {getAqiIcon, getStatus} from "../../../utils"


function DynamicIndicators({indicators}){

    return (
        <>
            <Row>

                {indicators.map((indicator)=>{
                    const status = indicator?.rate ?  getAqiIcon(indicator.rate,"status"):getAqiIcon(indicator.bigRate,"status") ;
                    return (
                        <Col className={"mt-10"} >
                            <div  className="page-indicator"  >
                                <div sm={4}  >
                                    {indicator?.rate ? (<p  className="mt-4 p-2 " style={{width:50,height:50,borderRadius:"50%",
                                            backgroundColor:status,color:"#000",fontSize:"1.3rem"}}>{indicator.rate}</p>) :
                                        (<p className="mt-4 p-2" style={{borderRadius:"50%",backgroundColor:status,color:"#000",
                                            fontSize:"1.3rem",width:50,height:50}}>{indicator?.bigRate}</p>)}
                                </div>
                                <div sm={6} >
                                    <p>{indicator?.text}</p>

                                </div>
                                <div sm={4}>
                                    <FontAwesomeIcon icon={indicator?.icon} color={status} size="4x" className="mt-2"/>
                                </div>
                            </div>
                        </Col>
                    )
                })}

            </Row>

        </>
    )
}

export default DynamicIndicators