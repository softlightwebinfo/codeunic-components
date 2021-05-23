// Generated with util/create-component.js
import React, { useState } from "react";
import { ViewNotesProps } from "./ViewNotes.types";
import { BEM } from "../../libs/BEM";
import Note from "../../components/Note/Note";
import NoteContent from "../../components/NoteContent/NoteContent";

const ViewNotes: React.FC<ViewNotesProps> = (props) => {
    const [state, setState] = useState("");
    const bm = new BEM("ViewNotes", {});
    bm.Append(props.className);
    return (
        <div data-testid="ViewNotes" className={bm.toString()} style={props.style}>
            <div className={bm.Children("content")}>
                <NoteContent note={state}/>
            </div>
            <ul className={bm.Children("notes")}>
                {props.notes.map((item, index) => (
                    <li key={index}>
                        <Note {...item} onClick={() => setState(item.description)}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewNotes;