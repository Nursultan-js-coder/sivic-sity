import { useState } from "react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import React from "react"
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function SpinnerLoader(){
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#b547ff");
    return (
        <>
        <SyncLoader color={color} loading={loading} css={override} size={30} />
        </>
    )
}
export default SpinnerLoader;
