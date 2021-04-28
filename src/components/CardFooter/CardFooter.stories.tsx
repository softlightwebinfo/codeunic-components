// Generated with util/create-component.js
import React from "react";
import CardFooter from "./CardFooter";
import ButtonDefault from "../ButtonDefault/ButtonDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Card/CardFooter"
};

export const Default = () => <CardFooter>
    <ButtonDefault onClick={console.log}>Desconectar <FontAwesomeIcon icon={faLock}/></ButtonDefault>
</CardFooter>;