// Generated with util/create-component.js
import React from "react";
import { WidgetSubscribeProps } from "./WidgetSubscribe.types";
import "./WidgetSubscribe.scss";
import Widget from "../Widget/Widget";
import { BEM } from "../../libs/BEM";
import { TitleSubtitle } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const WidgetSubscribe: React.FC<WidgetSubscribeProps> = (props) => {
    const bm = new BEM("WidgetSubscribe", {});
    bm.Append(props.className);
    return (
        <Widget className={bm.toString()} style={props.style}>
            <form onSubmit={props.onSubmit}>
                <FontAwesomeIcon icon={faEnvelope}/>
                <TitleSubtitle
                    center
                    title={"Notifications"}
                    subTitle={"Subscribe to notifications about new episodes"}
                />
                <Input
                    onChange={props.onChange}
                    value={props.value}
                    placeholder={"Email"}
                />
                <Button dark block type={"submit"}>SEND</Button>
            </form>
        </Widget>
    );
}

export default WidgetSubscribe;