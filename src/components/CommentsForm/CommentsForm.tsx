// Generated with util/create-component.js
import React from "react";
import { CommentsFormProps } from "./CommentsForm.types";
import Widget from "../../widgets/Widget/Widget";
import { BEM } from "../../libs/BEM";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";

const CommentsForm: React.FC<CommentsFormProps> = (props) => {
    const bm = new BEM("CommentsForm", {});
    bm.Append(props.className);
    return (
        <Widget className={bm.toString()} style={props.style}>
            <form onSubmit={props.onSubmit}>
                <Textarea placeholder={"Message"} value={props.value} onChange={props.onChange}/>
                <Button type="submit" default style={{minWidth: 200}}>
                    SEND
                </Button>
            </form>
        </Widget>
    );
}

export default CommentsForm;

