// Generated with util/create-component.js
import React from "react";
import { CommentsListProps } from "./CommentsList.types";
import "./CommentsList.scss";
import { BEM } from "../../libs/BEM";
import Comment from "../Comment/Comment";

const CommentsList: React.FC<CommentsListProps> = (props) => {
    const bm = new BEM("CommentsList", {});
    bm.Append(props.className);
    return (
        <ul className={bm.toString()}>
            {props.comments.map((comment, index) => (
                <Comment {...comment} key={index}/>
            ))}
        </ul>
    );
}

export default CommentsList;