// Generated with util/create-component.js
import React from "react";
import { ViewTicketHomePageProps } from "./ViewTicketHomePage.types";
import style from "./ViewTicketHomePage.scss";
import { BEM } from "../../libs/BEM";
import TitleSubtitle from "../../components/TitleSubtitle/TitleSubtitle";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import Step from "../../components/Step/Step";
import AvatarHeader from "../../components/AvatarHeader/AvatarHeader";
import WidgetStat from "../../widgets/WidgetStat/WidgetStat";
import Container from "../../components/Container/Container";
import Grid from "../../components/Grid/Grid";

const ViewTicketHomePage: React.FC<ViewTicketHomePageProps> = (props) => {
    const bm = new BEM("ViewTicketHomePage", {}, style);
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("title")}>
                <TitleSubtitle center {...props.title}/>
                <ButtonDefault className={bm.Children("button")} {...props.button}/>
            </div>
            <video src={props.video} autoPlay muted loop playsInline/>
            <div className={bm.Children("steps")}>
                <TitleSubtitle className={bm.Children("steps-title")} center {...props.titleStep}/>
                {props.steps.map((item, index) => (
                    <Step inset badge={(++index).toString()}>
                        <AvatarHeader
                            noImage
                            title={item.title}
                            subTitle={item.subTitle}
                            avatar={item.icon}
                        />
                    </Step>
                ))}
            </div>
            <div className={bm.Children("steps")}>
                <TitleSubtitle className={bm.Children("steps-title")} center {...props.titleFeatures}/>
                <Container>
                    <Grid col={3}>
                        {props.features.map((feature, index) => (
                            <WidgetStat key={index}{...feature}/>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default ViewTicketHomePage;