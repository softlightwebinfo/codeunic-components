// Generated with util/create-component.js
import React from "react";
import { CardPanelUserProps } from "./CardPanelUser.types";
import { BEM } from "../../libs/BEM";
import AvatarHeader from "../AvatarHeader/AvatarHeader";
import Widget from "../../widgets/Widget/Widget";
import Button from "../Button/Button";

const CardPanelUser: React.FC<CardPanelUserProps> = (props) => {
    const bm = new BEM("CardPanelUser", {});
    bm.Append(props.className);
    return (
        <Widget default className={bm.toString()} style={props.style}>
            <header>
                <AvatarHeader {...props.avatar} big/>
                <Button default theme={"white"}>View profile</Button>
            </header>
            <footer>
                {props.buttons.map((item, key) => (
                    <Button single {...item} key={key}/>
                ))}
            </footer>
        </Widget>
    );
}

export default CardPanelUser;