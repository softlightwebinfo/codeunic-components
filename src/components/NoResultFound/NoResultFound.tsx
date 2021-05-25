// Generated with util/create-component.js
import React from "react";
import { NoResultFoundProps } from "./NoResultFound.types";
import { BEM } from "../../libs/BEM";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextInfo from "../TextInfo/TextInfo";

const NoResultFound: React.FC<NoResultFoundProps> = (props) => {
    const bm = new BEM("NoResultFound", {});
    bm.Append(props.className)
    return (
        <div data-testid="NoResultFound" className={bm.toString()} style={props.style}>
            <FontAwesomeIcon icon={faSearchPlus}/>
            <TextInfo message={"No result found"}/>
        </div>
    );
}

export default NoResultFound;