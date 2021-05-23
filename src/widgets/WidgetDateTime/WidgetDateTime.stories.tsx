// Generated with util/create-component.js
import React from "react";
import WidgetDateTime from "./WidgetDateTime";
import Grid from "../../components/Grid/Grid";
import Container from "../../components/Container/Container";

export default {
    title: "Widgets/WidgetDateTime"
};

export const Default = () => <WidgetDateTime
    date={"2021-05-23"}
/>;

export const GridList = () => (
    <Container>
        <Grid col={4}>
            <WidgetDateTime
                date={"2021-05-23 12:10:11"}
            />
            <WidgetDateTime
                date={"2021-05-23"}
            />
            <WidgetDateTime
                date={"2021-05-23"}
            />
            <WidgetDateTime
                date={"2021-05-23"}
            />
        </Grid>
    </Container>
);
