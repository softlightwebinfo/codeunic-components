// Generated with util/create-component.js
import React from "react";
import { ViewVideoNoMatchProps } from "./ViewVideoNoMatch.types";
import style from "./ViewVideoNoMatch.scss";
import { BEM } from "../../libs/BEM";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

const ViewVideoNoMatch: React.FC<ViewVideoNoMatchProps> = (props) => {
    const bm = new BEM("ViewVideoNoMatch", {}, style);
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <Navbar
                default
                left={<Logo {...props.logo}/>}
                right={(
                    <Menu
                        horizontal
                        menu={props.menu}
                    />
                )}
            />
            <Section image={props.image}>
                <div className={bm.Children("content")}>
                    <h2>{props.title}</h2>
                    <Button theme={"primary"} onClick={props.onClickReturn}>{props.link}</Button>
                </div>
            </Section>
        </div>
    );
}

export default ViewVideoNoMatch;