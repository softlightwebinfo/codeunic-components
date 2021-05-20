// Generated with util/create-component.js
import React from "react";
import CardSection from "./CardSection";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "../Grid/Grid";

export default {
    title: "Card/CardSection"
};

export const Default = () => <CardSection
    title={"Request time off"}
    description={"Doloribus dolores nostrum quia qui natus officia quof et dolorem. sit repelledus qui ut at blanditiis et quo et molastiae"}
    icon={<FontAwesomeIcon icon={faHome}/>}
/>;
export const GridList = () => (
    <Grid col={2} style={{gap: 0}}>
        <CardSection
            style={{borderRadius: 0}}
            title={"Request time off"}
            description={"Doloribus dolores nostrum quia qui natus officia quof et dolorem. sit repelledus qui ut at blanditiis et quo et molastiae"}
            icon={<FontAwesomeIcon icon={faHome}/>}
        />
        <CardSection
            style={{borderRadius: 0}}
            title={"Request time off"}
            description={"Doloribus dolores nostrum quia qui natus officia quof et dolorem. sit repelledus qui ut at blanditiis et quo et molastiae"}
            icon={<FontAwesomeIcon icon={faHome}/>}
        />
        <CardSection
            style={{borderRadius: 0}}
            title={"Request time off"}
            description={"Doloribus dolores nostrum quia qui natus officia quof et dolorem. sit repelledus qui ut at blanditiis et quo et molastiae"}
            icon={<FontAwesomeIcon icon={faHome}/>}
        />
        <CardSection
            style={{borderRadius: 0}}
            title={"Request time off"}
            description={"Doloribus dolores nostrum quia qui natus officia quof et dolorem. sit repelledus qui ut at blanditiis et quo et molastiae"}
            icon={<FontAwesomeIcon icon={faHome}/>}
        />
        <CardSection
            style={{borderRadius: 0}}
            title={"Request time off"}
            description={"Doloribus dolores nostrum quia qui natus officia quof et dolorem. sit repelledus qui ut at blanditiis et quo et molastiae"}
            icon={<FontAwesomeIcon icon={faHome}/>}
        />
        <CardSection
            style={{borderRadius: 0}}
            title={"Request time off"}
            description={"Doloribus dolores nostrum quia qui natus officia quof et dolorem. sit repelledus qui ut at blanditiis et quo et molastiae"}
            icon={<FontAwesomeIcon icon={faHome}/>}
        />
    </Grid>
);