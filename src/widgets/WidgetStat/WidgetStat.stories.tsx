// Generated with util/create-component.js
import React from "react";
import WidgetStat from "./WidgetStat";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "../../components/Grid/Grid";

export default {
    title: "Widgets/WidgetStat"
};

export const Default = () => <WidgetStat
    text={"View"}
    textSecondary={35}
    color={"red"}
    title={"+24k"}
    icon={<FontAwesomeIcon icon={faHome}/>}
    isUp={true}
/>;
export const List = () => (
    <Grid col={4}>
        <WidgetStat
            text={"View"}
            textSecondary={35}
            color={"red"}
            title={"+24k"}
            icon={<FontAwesomeIcon icon={faHome}/>}
            isUp={true}
        />
        <WidgetStat
            text={"View"}
            textSecondary={35}
            color={"red"}
            title={"+24k"}
            icon={<FontAwesomeIcon icon={faHome}/>}
            isUp={true}
        />
        <WidgetStat
            text={"View"}
            textSecondary={35}
            color={"red"}
            title={"+24k"}
            icon={<FontAwesomeIcon icon={faHome}/>}
            isUp={true}
        />
        <WidgetStat
            text={"View"}
            textSecondary={35}
            color={"red"}
            title={"+24k"}
            icon={<FontAwesomeIcon icon={faHome}/>}
            isUp={true}
        />
    </Grid>
);