// Generated with util/create-component.js
import React from "react";
import { CardSectionProps } from "./CardSection.types";
import { BEM } from "../../libs/BEM";
import Widget from "../../widgets/Widget/Widget";
import TitleSubtitle from "../TitleSubtitle/TitleSubtitle";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const CardSection: React.FC<CardSectionProps> = (props) => {
    const bm = new BEM("CardSection", {});
    bm.Append(props.className)
    return (
        <Widget default className={bm.toString()} style={props.style}>
            <Button dark theme={"warning"} isIcon onClick={props.onClickButton}>{props.icon}</Button>
            <Button className={bm.Children("button")} dark isIcon><FontAwesomeIcon icon={faArrowUp}/></Button>
            <TitleSubtitle className={bm.Children("title")} title={props.title} subTitle={props.description}/>
        </Widget>
    );
}

export default CardSection;