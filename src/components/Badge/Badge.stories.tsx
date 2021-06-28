// Generated with util/create-component.js
import React from "react";
import Badge from "./Badge";
import HeadExample from "../HeadExample/HeadExample";

export default {
    title: "Badge"
};

export const Default = () => <Badge label={"18+"}/>;
export const Push = () => <div style={{margin: 40}}>
    <Badge label={"18+"} theme={"primary"} push>
        <HeadExample/>
    </Badge>
</div>;