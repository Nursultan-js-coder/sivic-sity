import {Alert} from "react-bootstrap";
import React from "react"

function Error({error}){
    return (
        <Alert  variant="danger" style={{width:"100%"}}>
            {error}
        </Alert>
    )
}
export default Error;