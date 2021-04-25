// Generated with util/create-component.js
import React from "react";
import Parallax from "./Parallax";
import { ContainerFluid } from "../index";
import { CarouselSlide } from "../../layouts/LayoutCardVideo/LayoutCardVideo.stories";

export default {
    title: "Parallex"
};

export const Default = () => (
    <div>
        <div style={{height: 200}}/>
        <Parallax style={{marginBottom: 40}} image={"/images/parallex.jpg"}>
            <ContainerFluid>
                <CarouselSlide/>
            </ContainerFluid>
        </Parallax>
        <div style={{height: 400}}/>
    </div>
);
