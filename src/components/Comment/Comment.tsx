// Generated with util/create-component.js
import React from "react";
import { CommentProps } from "./Comment.types";
import "./Comment.scss";
import { BEM } from "../../libs/BEM";
import AvatarHeader from "../AvatarHeader/AvatarHeader";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import Quote from "../Quote/Quote";

const Comment: React.FC<CommentProps> = (props) => {
    const bm = new BEM("Comment", {
        isQuote: props.isQuote,
        isAnswer: props.isAnswer,
    });
    bm.Append(props.className);
    return (
        <article className={bm.toString()}>
            <AvatarHeader className={bm.Children("author")} {...props.header}/>
            <div className={bm.Children("content")}>
                {props.content.quote && <Quote message={props.content.quote}/>}
                <p>{props.content.message}</p>
            </div>
            <footer className={bm.Children("footer")}>
                <div>
                    <Button dark onClick={props.footer.onClickLike}>
                        <FontAwesomeIcon icon={faPlusSquare}/>
                        {props.footer.likes}
                    </Button>
                    <Button dark onClick={props.footer.onClickDisLike}>
                        <FontAwesomeIcon icon={faMinusSquare}/>
                        {props.footer.dislikes}
                    </Button>
                </div>
                <div>
                    {props.footer.buttons.map((button, index) => (
                        <Button key={index} dark {...button}/>
                    ))}
                </div>
            </footer>
        </article>
    );
}

export default Comment;