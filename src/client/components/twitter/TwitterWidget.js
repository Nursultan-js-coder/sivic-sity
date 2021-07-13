import React from "react";
import { Timeline } from "react-twitter-widgets";
import twitter from "./logo.svg";
import "./twitter-timeline.css";

function TwitterWidget() {
    return (
        <>
            <div className="twitter-header d-flex justify-content-right pl-2">
                <img src={twitter} alt="twitter"/>
            </div>
            <Timeline
                dataSource={{
                    sourceType: "profile",
                    screenName: "Bishkek"
                }}
                options={{
                    height: "600"
                }}
            />
        </>
    );
}

export default TwitterWidget;
