// Generated with util/create-component.js
import React from "react";
import ViewVideoConference from "./ViewVideoConference";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { EOnClick } from "../../types/events.types";

export default {
    title: "Views/ViewVideoConference"
};

export const Default = () => <ViewVideoConference
    title={"Premium video meetings."}
    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
    logo={{
        image: "/images/logo.png",
        logo: "NetVisionTV"
    }}
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
    image={"/images/videoconference.png"}
    bgImage={"/images/sombra.jpg"}
    form={{
        value: "",
        onChange(evt: any) {
        },
        onClick(event: EOnClick) {
        },
        onClickJoin(event: EOnClick) {
        }
    }}
/>;