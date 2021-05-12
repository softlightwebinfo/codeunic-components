// Generated with util/create-component.js
import React from "react";
import { BadgesProps } from "./Badges.types";
import style from "./Badges.scss";
import { BEM } from "../../libs/BEM";
import Badge from "../Badge/Badge";

const Badges: React.FC<BadgesProps> = (props) => {
    const bm = new BEM("Badges", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()}>
            {props.list.map((genre, index) => <Badge key={index} clip theme={"dark"} label={genre}/>)}
        </div>
    );
}

export default Badges;