// Generated with util/create-component.js
import React from "react";
import Comment from "./Comment";
import { EOnClick } from "../../types/events.types";

export default {
    title: "Comment/Comment"
};

export const Default = () => <Comment
    header={{
        avatar: "/images/avatar.png",
        title: "Brian Cranston",
        subTitle: "30.08.2021, 17:53"
    }}
    content={{
        message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    }}
    footer={{
        likes: 12,
        dislikes: 7,
        buttons: [
            {children: "Reply", onClick: () => console.log},
            {children: "Quote", onClick: () => console.log},
        ],
        onClickDisLike(evt: EOnClick) {
        },
        onClickLike(evt: EOnClick) {
        }
    }}
/>;