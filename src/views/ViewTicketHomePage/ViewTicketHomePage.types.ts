// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TitleSubtitleProps } from "../../components/TitleSubtitle/TitleSubtitle.types";
import { ReactNode } from "react";
import { ButtonDefaultProps } from "../../components/ButtonDefault/ButtonDefault.types";
import { WidgetStatProps } from "../../widgets/WidgetStat/WidgetStat.types";

export interface ViewTicketHomePageProps extends IProps {
    video: string;
    title: TitleSubtitleProps;
    titleStep: TitleSubtitleProps;
    titleFeatures: TitleSubtitleProps;
    steps: Steps[];
    button: ButtonDefaultProps;
    features: WidgetStatProps[];
}

export interface Steps {
    icon: ReactNode;
    title: string;
    subTitle: string;
}