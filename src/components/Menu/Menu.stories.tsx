// Generated with util/create-component.js
import React from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHome, faStar, faTags } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Menu"
};

export const Default = () => <Menu
    menu={{
        index: {
            label: "Dashboard",
            icon: <FontAwesomeIcon icon={faHome}/>
        },
        classification: {
            label: "Classification",
            icon: <FontAwesomeIcon icon={faStar}/>
        },
        comments: {
            label: "Comments",
            icon: <FontAwesomeIcon icon={faComment}/>
        },
        prices: {
            label: "Prices",
            icon: <FontAwesomeIcon icon={faTags}/>
        },
    }}
/>;
