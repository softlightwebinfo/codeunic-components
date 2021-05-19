// Generated with util/create-component.js
import React from "react";
import { CardArticleProps } from "./CardArticle.types";
import { BEM } from "../../libs/BEM";
import CardImage from "../CardImage/CardImage";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardContent from "../CardContent/CardContent";
import TitleSubtitle from "../TitleSubtitle/TitleSubtitle";
import CardFooter from "../CardFooter/CardFooter";
import Button from "../Button/Button";
import AvatarHeader from "../AvatarHeader/AvatarHeader";
import TextInfo from "../TextInfo/TextInfo";

const CardArticle: React.FC<CardArticleProps> = (props) => {
    const bm = new BEM("CardArticle", {});
    bm.Append(props.className);
    return (
        <article className={bm.toString()} style={props.style}>
            <CardImage image={props.image}>
                <FontAwesomeIcon icon={faHeart}/>
            </CardImage>
            <CardContent className={bm.Children("content")}>
                <TextInfo message={props.category}/>
                <TitleSubtitle className={bm.Children("title")} title={props.title} subTitle={props.subTitle}/>
            </CardContent>
            <CardFooter className={bm.Children("footer")}>
                {props.buttons.map((button, index) => (
                    <Button {...button} key={index}/>
                ))}
            </CardFooter>
            <div className={bm.Children("avatar")}>
                <AvatarHeader {...props.avatar}/>
            </div>
        </article>
    );
}

export default CardArticle;