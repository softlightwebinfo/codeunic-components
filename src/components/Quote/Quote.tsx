// Generated with util/create-component.js
import React from "react";
import { QuoteProps } from "./Quote.types";
import { BEM } from "../../libs/BEM";

const Quote: React.FC<QuoteProps> = (props) => {
    const bm = new BEM("Quote", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            {props.message}
        </div>
    );
}

export default Quote;