// Generated with util/create-component.js
import React from "react";
import TitleActions from "./TitleActions";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
    title: "Title/TitleActions"
};

export const Default = () => <TitleActions
    title={"The Fast and the furious"}
    list={[
        <>
            <FontAwesomeIcon icon={faStar}/>
            9.7
        </>,
        "Action",
        "2021",
        "1h 42m",
        "16+",
    ]}
/>;

export const Description = () => <TitleActions
    title={"The Fast and the furious"}
    description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
    list={[
        <>
            <FontAwesomeIcon icon={faStar}/>
            9.7
        </>,
        "Action",
        "2021",
        "1h 42m",
        "16+",
    ]}
/>;