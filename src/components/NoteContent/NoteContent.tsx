// Generated with util/create-component.js
import React from "react";
import { NoteContentProps } from "./NoteContent.types";
import { BEM } from "../../libs/BEM";

const NoteContent: React.FC<NoteContentProps> = (props) => {
    const bm = new BEM("NoteContent", {});
    bm.Append(props.className)
    return (
        <div data-testid="NoteContent" className={bm.toString()} style={props.style}>
            <textarea value={props.note}/>
        </div>
    );
}

export default NoteContent;