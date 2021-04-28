// Generated with util/create-component.js
import React from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHome, faStar, faTags, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/Menu";

export default {
    title: "Sidebar"
};

export const Default = () => (
    <Sidebar
        image={"/images/logo.png"}
        logo={"STREAM PRIME"}
    >
        <Menu
            menu={{
                back: {
                    label: "Go to back",
                    icon: <FontAwesomeIcon icon={faArrowLeft} />
                },
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
        />
    </Sidebar>
);