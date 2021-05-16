// Generated with util/create-component.js
import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import { faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
    title: "Breadcrumbs"
};

export const Default = () => <Breadcrumbs
    component={(component, data) => <a href={data.route}>{component}</a>}
    data={[
        {
            data: "Home",
            active: true,
            arrow: <FontAwesomeIcon icon={faArrowRight}/>,
            icon: <FontAwesomeIcon icon={faHome}/>
        },
        {data: "Projects", route: "/index"},
        {data: "Project nero", route: "/home"},
    ]}
/>;