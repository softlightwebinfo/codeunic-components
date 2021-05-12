// Generated with util/create-component.js
import React from "react";

import { ButtonDefaultProps } from "./ButtonDefault.types";

import style from "./ButtonDefault.scss";
import Button from "../Button/Button";

const ButtonDefault: React.FC<ButtonDefaultProps> = ({...props}) => (
    <Button
        default
        single
        {...props}
    />
);

export default ButtonDefault;

