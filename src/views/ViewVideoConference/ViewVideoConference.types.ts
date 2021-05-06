// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { LogoProps } from "../../components/Logo/Logo.types";
import { TMenu } from "../../components/Menu/Menu.types";
import { EOnClick } from "../../types/events.types";

export interface ViewVideoConferenceProps extends IProps {
    image: string;
    logo: LogoProps;
    menu: TMenu;
    bgImage: string;
    title: string;
    description: string;
    form: {
        onClickJoin(event: EOnClick);
        onClick(event: EOnClick);
        onChange(evt: any): void;
        value: string;
    };
}