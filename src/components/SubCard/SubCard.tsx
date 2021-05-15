// Generated with util/create-component.js
import React from "react";
import { SubCardProps } from "./SubCard.types";
import { BEM } from "../../libs/BEM";
import CardIcon from "../CardIcon/CardIcon";
import Card from "../Card/Card";
import CardTitle from "../CardTitle/CardTitle";

const SubCard: React.FC<SubCardProps> = (props) => {
    const bm = new BEM("SubCard", {});
    bm.Append(props.className);
    return (
        <Card className={bm.toString()} style={props.style}>
            <CardIcon icon={props.icon}/>
            <CardTitle title={props.title} subTitle={props.subTitle}/>
        </Card>
    );
}

export default SubCard;