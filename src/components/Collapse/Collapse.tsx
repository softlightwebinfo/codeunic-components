import React, { useState } from "react";
import { CollapseProps } from "./Collapse.types";
import "./Collapse.scss";
import { BEM } from "../../libs/BEM";
import ButtonDefault from "../ButtonDefault/ButtonDefault";

const Collapse: React.FC<CollapseProps> = (props) => {
    const [state, setState] = useState(false);
    const bm = new BEM("Collapse", {});
    bm.Append(props.className);

    const onClick = (evt) => {
        evt.stopPropagation();
        setState(!state);
    }

    return (
        <div className={bm.toString()} style={props.style}>
            <header onClick={onClick}>
                <h4>{props.title}</h4>
                <ButtonDefault onClick={onClick}>{!state ? '+' : '-'}</ButtonDefault>
            </header>
            {state && (<section>{props.children}</section>)}
        </div>
    );
}

export default Collapse;