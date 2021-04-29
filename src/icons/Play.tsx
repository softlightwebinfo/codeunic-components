import React from "react";

export const Circle = (props) => (
    <svg
        style={props.style}
        className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px"
        id="circle" fill="none"
        stroke="currentColor"
    >
        <circle r="20" cy="22" cx="22" id="test"/>
    </svg>
)