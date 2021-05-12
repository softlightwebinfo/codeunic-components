// Generated with util/create-component.js
import React, { useImperativeHandle, useState } from "react";

import { CarouselProps } from "./Carousel.types";

import style from "./Carousel.scss";
import { BEM } from "../../libs/BEM";
import SlickList from "../SlickList/SlickList";
import SlickArrow from "../SlickArrow/SlickArrow";

const Carousel: React.FC<CarouselProps> = React.forwardRef((props, ref: any) => {
    const [active, setActive] = useState(0);
    const bm = new BEM("Carousel", {}, style);
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

    useImperativeHandle(ref, () => ({
        onClickNext: onClick(1),
        onClickPrev: onClick(-1),
    }));

    return (
        <div
            ref={ref}
            style={props.style}
            className={bm.toString()}
        >
            {!props.noArrow && <SlickArrow onClick={onClick(-1)} left/>}
            <SlickList
                isDetail={props.isDetail}
                col={props.col}
                component={props.component}
                active={active}
                data={props.data}
                children={props.children}
            />
            {!props.noArrow && <SlickArrow onClick={onClick(1)}/>}
        </div>
    );
})

export default Carousel;