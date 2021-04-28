// Generated with util/create-component.js
import React from "react";
import Plan from "./Plan";
import Grid from "../Grid/Grid";
import Container from "../Container/Container";

export default {
    title: "Plan/Plan"
};

export const Default = () => (
    <Plan
        title={"Prima"}
        active={true}
        price={"34.99 ¢ / mes"}
        priceBy={"month"}
        list={[
            {title: "Originales de stream premium", active: true},
            {title: "Originales de stream premium", active: true},
            {title: "Originales de stream premium", active: true},
            {title: "Originales de stream premium", active: false},
        ]}
    />
);
export const GridList = () => (
    <Container>
        <Grid col={3}>
            <Plan
                title={"Regular"}
                price={"11.99 ¢"}
                priceBy={"month"}
                list={[
                    {title: "Originales de stream premium", active: true},
                    {title: "Originales de stream premium", active: true},
                    {title: "Originales de stream premium", active: true},
                    {title: "Originales de stream premium", active: false},
                ]}
            />
            <Plan
                title={"Prima"}
                active={true}
                price={"34.99 ¢"}
                priceBy={"month"}
                list={[
                    {title: "Originales de stream premium", active: true},
                    {title: "Originales de stream premium", active: true},
                    {title: "Originales de stream premium", active: true},
                    {title: "Originales de stream premium", active: false},
                ]}
            />
            <Plan
                title={"Canales premium + TV"}
                price={"49.99 ¢"}
                priceBy={"month"}
                list={[
                    {title: "Originales de stream premium", active: true},
                    {title: "Originales de stream premium", active: true},
                    {title: "Originales de stream premium", active: true},
                    {title: "Originales de stream premium", active: false},
                ]}
            />
        </Grid>
    </Container>
);