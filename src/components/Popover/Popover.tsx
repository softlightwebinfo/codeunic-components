// Generated with util/create-component.js
import React, { useCallback, useEffect, useRef, useState } from "react";
import { PopoverProps } from "./Popover.types";
import { BEM } from "../../libs/BEM";
import Portal  from "../Portal/Portal";
import ClickOutside from "../ClickOutside/ClickOutside";

const Popover: React.FC<PopoverProps> = (props) => {
    const [portalStyles, setPortalStyles] = useState({})
    const [open, setOpen] = useState(props.initialOpen);
    const targetRef = useRef(null)
    const ref = useRef(null);

    const {
        isClick = props.isHover ?? true,
    } = props;

    const bm = new BEM("Popover", {
        open,
    });

    useEffect(() => {
            if (!open) return;
            const targetBox = targetRef.current.getBoundingClientRect();
            const popoverBox = ref.current.getBoundingClientRect();
            const popoverWidth = popoverBox.width / 2;
            const targetWidth = targetBox.width / 2;
            const targetHeight = targetBox.height;

            setPortalStyles({
                top: targetBox.top + (targetHeight + 20) + window.scrollY,
                left: targetBox.left - popoverWidth + targetWidth + window.scrollX,
            });
        },
        [open],
    )

    bm.Append(props.className);

    const show = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!isClick) return;
        setOpen(prv => !prv);
    }, []);

    return (
        <div className={bm.toString()} style={props.style}>
            <span ref={targetRef} onClick={show}>{props.trigger}</span>
            {
                open && (
                    <Portal id={"Popover"}>
                        <ClickOutside onClick={() => setOpen(false)}>
                            <div ref={ref} style={portalStyles} className={bm.Children("menu")}>
                                {props.text}
                            </div>
                        </ClickOutside>
                    </Portal>
                )
            }
        </div>
    );
}

export default Popover;
