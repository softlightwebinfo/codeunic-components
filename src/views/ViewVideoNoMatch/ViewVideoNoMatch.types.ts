// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TMenu } from "../../components/Menu/Menu.types";
import { LogoProps } from "../../components/Logo/Logo.types";

export interface ViewVideoNoMatchProps extends IProps {
    onClickReturn(evt: any);

    link: string;
    title: string;
    image: string;
    logo: LogoProps;
    menu: TMenu;
}
