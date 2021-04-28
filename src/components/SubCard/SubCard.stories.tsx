// Generated with util/create-component.js
import React from "react";
import SubCard from "./SubCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Card/SubCard"
};

export const Default = () => (
    <SubCard
        title={"Mi perfil"}
        subTitle={"Ver detalles de perfil personal."}
        icon={<FontAwesomeIcon icon={faHome}/>}
    />
);