// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { AvatarProps } from "../Avatar/Avatar.types";
import { TTheme } from "../../types/TTheme";
import { ProgressProps } from "../Progress/Progress.types";

export interface ProjectCardProps extends IProps {
    label: string;
    labelTheme?: TTheme;
    avatars: AvatarProps[];
    description: string;
    title: string;
    subTitle: string;
    avatar: string;
    progress: ProgressProps;
}
