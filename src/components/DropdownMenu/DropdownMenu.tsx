// Generated with util/create-component.js
import React from "react";

import { DropdownMenuProps } from "./DropdownMenu.types";

import style from "./DropdownMenu.scss";
import { BEM } from "../../libs/BEM";
import Card from "../Card/Card";
import CardHeader from "../CardHeader/CardHeader";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
    const bm = new BEM("DropdownMenu", {}, style)
    bm.Append(props.className);
    return (
        <Card className={bm.toString()} style={props.style}>
            <CardHeader badge={props.badge} title={props.title} subTitle={props.subTitle}/>
            <CardContent>{props.children}</CardContent>
            <CardFooter>{props.footer}</CardFooter>
        </Card>
    );
}

export default DropdownMenu;

