// Generated with util/create-component.js
import React, { useState } from "react";

import { CarouselProps } from "./Carousel.types";

import "./Carousel.scss";
import { BEM } from "../../libs/BEM";
import SlickList from "../SlickList/SlickList";
import SlickArrow from "../SlickArrow/SlickArrow";

const Carousel: React.FC<CarouselProps> = (props) => {
    const [active, setActive] = useState(0);
    const bm = new BEM("Carousel", {});
    bm.Append(props.className);

    const onClick = (pos: number) => () => {
        let length = props.data.length;
        if (props.col) {
            length = Math.ceil(length / props.col);
        }
        setActive(active => {
            const a = ((active + pos) % length);
            return a < 0 ? length - 1 : a;
        });
    }

    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <SlickArrow onClick={onClick(-1)} left/>
            <SlickList col={props.col} component={props.component} active={active} data={props.data}
                       children={props.children}/>
            <SlickArrow onClick={onClick(1)}/>
        </div>
    );
}

export default Carousel;