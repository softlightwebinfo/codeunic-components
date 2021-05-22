// Generated with util/create-component.js
import React from "react";
import { ProjectCardProps } from "./ProjectCard.types";
import { BEM } from "../../libs/BEM";
import { Widget } from "../../widgets";
import AvatarHeader from "../AvatarHeader/AvatarHeader";
import TextInfo from "../TextInfo/TextInfo";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Progress from "../Progress/Progress";
import { Avatars } from "../Avatars/Avatars";
import Avatar from "../Avatar/Avatar";
import Badge from "../Badge/Badge";

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const bm = new BEM("ProjectCard", {});
    bm.Append(props.className)
    return (
        <Widget default data-testid="ProjectCard" className={bm.toString()} style={props.style}>
            <AvatarHeader noImage avatar={props.avatar} title={props.title} subTitle={props.subTitle}>
                <FontAwesomeIcon icon={faEllipsisH}/>
            </AvatarHeader>
            <TextInfo message={props.description}/>
            <Progress {...props.progress}/>
            <div className={bm.Children("content-row")}>
                <Avatars>
                    {props.avatars.map((avatar, index) => (
                        <Avatar {...avatar} key={index}/>
                    ))}
                </Avatars>
                <Badge theme={props.labelTheme} label={props.label}/>
            </div>
        </Widget>
    );
}

export default ProjectCard;