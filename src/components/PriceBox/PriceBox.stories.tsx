// Generated with util/create-component.js
import React from "react";
import PriceBox from "./PriceBox";
import { Grid } from "../index";

export default {
    title: "TablePrice/PriceBox"
};

export const Default = () => (
    <Grid style={{
        background: "var(--iq-bg1)",
        padding: 20,
    }}>
        <PriceBox
            title={"Libre"}
            price={0}
            currency={"€"}
            type={"meses"}
        />
        <PriceBox
            title={"Standard"}
            price={2.95}
            currency={"€"}
            type={"meses"}
        />
        <PriceBox
            active
            title={"Plus"}
            price={4.95}
            currency={"€"}
            type={"meses"}
        />
        <PriceBox
            title={"Premium"}
            price={7.95}
            currency={"€"}
            type={"meses"}
        />
    </Grid>
);
