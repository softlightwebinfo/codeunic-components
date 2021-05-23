// Generated with util/create-component.js
import React from "react";
import BigButton from "./BigButton";
import Grid from "../Grid/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "BigButton"
};

export const Default = () => <BigButton
    icon={<FontAwesomeIcon icon={faHome}/>}
    title={"Automation"}
/>;

export const GridList = () => (
    <Grid col={3} style={{gap: 0}}>
        <BigButton
            icon={<FontAwesomeIcon icon={faHome}/>}
            title={"Automation"}
        />
        <BigButton
            icon={<FontAwesomeIcon icon={faHome}/>}
            title={"Automation"}
        />
        <BigButton
            icon={<FontAwesomeIcon icon={faHome}/>}
            title={"Automation"}
        />
        <BigButton
            icon={<FontAwesomeIcon icon={faHome}/>}
            title={"Automation"}
        />
        <BigButton
            icon={<FontAwesomeIcon icon={faHome}/>}
            title={"Automation"}
        />
        <BigButton
            icon={<FontAwesomeIcon icon={faHome}/>}
            title={"Automation"}
        />
    </Grid>
)