// Generated with util/create-component.js
import React from "react";
import CardImage from "./CardImage";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
    title: "Card/CardImage"
};

export const Default = () => <CardImage
    image={"/images/photo.jpeg"}
>
    <FontAwesomeIcon icon={faHeart}/>
</CardImage>