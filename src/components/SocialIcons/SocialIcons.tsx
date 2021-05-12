// Generated with util/create-component.js
import React from "react";
import { SocialIconsProps } from "./SocialIcons.types";
import style from "./SocialIcons.scss";
import { BEM } from "../../libs/BEM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const SocialIcons: React.FC<SocialIconsProps> = (props) => {
    const bm = new BEM("SocialIcons", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()}>
            <a href={props.facebook} target="_social">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href={props.twitter} target="_social">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href={props.instagram} target="_social">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href={props.youtube} target="_social">
                <FontAwesomeIcon icon={faYoutube}/>
            </a>
            <a href={props.twitch} target="_social">
                <FontAwesomeIcon icon={faTwitch}/>
            </a>
        </div>
    );
}

export default SocialIcons;

