// Generated with util/create-component.js
import React from "react";
import InputGroup from "./InputGroup";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Input/Input";

export default {
    title: "InputGroup"
};

export const Default = () => <InputGroup
    icon={<FontAwesomeIcon icon={faVideo}/>}
>
    <Input/>
</InputGroup>;