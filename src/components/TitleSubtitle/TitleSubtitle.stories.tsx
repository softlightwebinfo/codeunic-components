// Generated with util/create-component.js
import React from "react";
import TitleSubtitle from "./TitleSubtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import Badge from "../Badge/Badge";

export default {
    title: "Title/TitleSubtitle"
};

export const Default = () => (
    <TitleSubtitle
        title={"Selecciona tu plan"}
        subTitle={"Sin tarifas ocultas, alquiler de equipos ni citas de instalacion"}
    />
);
export const ListItem = () => (
    <TitleSubtitle
        default
        group
        title={(
            <TitleSubtitle
                title={(
                    <>
                        <FontAwesomeIcon style={{marginRight: 5}} icon={faBorderNone}/>
                        Database tools
                    </>
                )}
                subTitle={"Jul 25, 2017 for Alimul Alrazy"}
            />
        )}
        subTitle={<Badge theme={"success"} label={"Progressing"}/>}
    />
);