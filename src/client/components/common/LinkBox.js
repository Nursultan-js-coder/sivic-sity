import {Card} from "react-bootstrap";
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSmile, faDizzy, faFrown, faMeh, faMehBlank, faTired} from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";



function LinkBox({indicator}){
    return (
        <>
        <Link  to={"/home"+indicator.path} className="text-decoration-none" >
            <Card bg={indicator.bg} className="rounded-circle">
                <Card.Body className="home-indicator" style={{backgroundColor:indicator.bg}}>
                  <div className="home-indicator-header text-center text-capitalize">
                      { indicator.title && <p>{indicator.title}</p>}
                      { indicator.subtitle && <p>{indicator.subtitle}</p>}
                  </div>
                    <div className="home-indicator-content">
                        {
                        indicator.indicators.map(content=>{
                            return (
                                <>
                                    {content.rate  ? (<p>{content.rate}</p>):(<p>{content.bigRate}</p>)}
                                    <p>{content?.text &&  content?.text}</p>
                                    <p>{content?.icon &&  <FontAwesomeIcon icon = {content?.icon} size="lg"/> }</p>
                                </>
                            )
                        })
                        }
                  </div>
                    <div className="home-indicator-footer">

                  </div>
                </Card.Body>
            </Card>
        </Link>
        </>
    )
}
export default LinkBox;