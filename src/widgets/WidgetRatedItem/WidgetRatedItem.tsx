// Generated with util/create-component.js
import React, { createRef } from "react";
import { WidgetRatedItemProps } from "./WidgetRatedItem.types";
import Widget from "../Widget/Widget";
import { BEM } from "../../libs/BEM";
import TitleCategory from "../../components/TitleCategory/TitleCategory";
import Carousel from "../../components/Carousel/Carousel";
import RatedItem from "../../components/RatedItem/RatedItem";
import Button from "../../components/Button/Button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WidgetRatedItem: React.FC<WidgetRatedItemProps> = (props) => {
    const bm = new BEM("WidgetRatedItem", {});
    bm.Append(props.className);
    let reference: any = createRef();
    return (
        <Widget className={bm.toString()} style={props.style}>
            <TitleCategory title={props.title} hiddenRight right={(
                <>
                    <Button onClick={() => reference.current?.onClickPrev()}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </Button>
                    <Button onClick={() => reference.current?.onClickNext()}>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </Button>
                </>
            )}/>
            <Carousel
                noArrow
                ref={reference}
                col={4}
                data={props.data}
                component={props => <RatedItem {...props}/>}
            />
        </Widget>
    );
}

export default WidgetRatedItem;

