// Generated with util/create-component.js
import React from "react";
import ViewVideoNoMatch from "./ViewVideoNoMatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Views/ViewVideoNoMatch"
};

export const Default = () => <ViewVideoNoMatch
    image={"/images/ejercito.jpg"}
    title={"Invalid video vall name."}
    link={"Return to home screen"}
    onClickReturn={console.log}
    logo={{image: "/images/logo.png", logo: "NetVisionTV"}}
    menu={{
        "help2": {
            icon: <FontAwesomeIcon icon={faInfo}/>
        },
        "help": {
            icon: <FontAwesomeIcon icon={faInfoCircle}/>
        },
        "setting": {
            icon: <FontAwesomeIcon icon={faCog}/>
        },
    }}
/>;