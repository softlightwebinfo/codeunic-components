// Generated with util/create-component.js
import React from "react";
import WidgetStep from "./WidgetStep";
import Grid from "../../components/Grid/Grid";

export default {
    title: "Widgets/WidgetStep"
};

export const Default = () => <WidgetStep
    number={"01"}
    title={"Choose your plan"}
    description={"It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining"}
/>;
export const List = () => (
    <Grid col={3}>
        <WidgetStep
            number={"01"}
            title={"Choose your plan"}
            description={"It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining"}
        />
        <WidgetStep
            number={"02"}
            title={"Create an account"}
            description={"It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining"}
        />
        <WidgetStep
            number={"03"}
            title={"Enjoy Stream"}
            description={"It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining"}
        />
    </Grid>
);
