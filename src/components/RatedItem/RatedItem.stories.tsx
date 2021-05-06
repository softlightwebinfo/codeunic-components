// Generated with util/create-component.js
import React from "react";
import RatedItem from "./RatedItem";
import Grid from "../Grid/Grid";

export default {
    title: "RatedItem"
};

export const Default = () => <RatedItem
    image={"/images/category.jpeg"}
    title={"Last Race"}
    description={"TV show"}
    views={"120"}
    play={"20"}
/>;
export const List = () => (
    <Grid col={4}>
        <RatedItem
            image={"/images/category.jpeg"}
            title={"Last Race"}
            description={"TV show"}
            views={"120"}
            play={"20"}
        />
        <RatedItem
            image={"/images/category.jpeg"}
            title={"Last Race"}
            description={"TV show"}
            views={"120"}
            play={"20"}
        />
        <RatedItem
            image={"/images/category.jpeg"}
            title={"Last Race"}
            description={"TV show"}
            views={"120"}
            play={"20"}
        />
        <RatedItem
            image={"/images/category.jpeg"}
            title={"Last Race"}
            description={"TV show"}
            views={"120"}
            play={"20"}
        />
    </Grid>
);