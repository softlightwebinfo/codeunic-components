// Generated with util/create-component.js
import React from "react";
import Category from "./Category";
import Grid from "../Grid/Grid";
import Container from "../Container/Container";
import TitleCategory from "../TitleCategory/TitleCategory";

export default {
    title: "Category"
};

export const Default = () => <Category image={"/images/category.jpeg"} title={"Comedia"} badge={"174"}/>;
export const GridList = () => (
    <Container>
        <TitleCategory title={"Categories"}/>
        <Grid col={4}>
            <Category image={"/images/category.jpeg"} title={"Comedia"} badge={"174"}/>
            <Category image={"/images/category.jpeg"} title={"Comedia"} badge={"174"}/>
            <Category image={"/images/category.jpeg"} title={"Comedia"} badge={"174"}/>
            <Category image={"/images/category.jpeg"} title={"Comedia"} badge={"174"}/>
            <Category image={"/images/category.jpeg"} title={"Comedia"} badge={"174"}/>
            <Category image={"/images/category.jpeg"} title={"Comedia"} badge={"174"}/>
            <Category image={"/images/category.jpeg"} title={"Comedia"} badge={"174"}/>
            <Category image={"/images/category.jpeg"} title={"Comedia"} badge={"174"}/>
        </Grid>
    </Container>
);
export const Card = () => (
    <Container>
        <Grid col={3}>
            <Category
                image={"/images/category.jpeg"}
                title={"Comedia"}
                list={["Libre", "Horror", "2021"]}
                badge={"174"}
            />
            <Category
                image={"/images/category.jpeg"}
                title={"Comedia"}
                list={["Libre", "Horror", "2021"]}
                badge={"174"}
            />
            <Category
                image={"/images/category.jpeg"}
                title={"Comedia"}
                list={["Libre", "Horror", "2021"]}
            />
        </Grid>
    </Container>
);