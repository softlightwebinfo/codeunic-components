// Generated with util/create-component.js
import React from "react";
import { NoteProps } from "./Note.types";
import { BEM } from "../../libs/BEM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Note: React.FC<NoteProps> = (props) => {
    const bm = new BEM("Note", {});
    bm.Append(props.className);
    return (
        <div onClick={props.onClick} data-testid="Note" className={bm.toString()} style={props.style}>
            <h3 className={bm.Children("title")}>{props.title}</h3>
            <div className={bm.Children("content")}>{props.description.substr(0, 100) + '...'}</div>
            <button onClick={props.onClose}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </div>
    );
}

export default Note;