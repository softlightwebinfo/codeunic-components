// Generated with util/create-component.js
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { FlyoutProps } from "./Flyout.types";
import { BEM } from "../../libs/BEM";
import ClickOutside from "../ClickOutside/ClickOutside";
import { createPortal } from "react-dom";
import Overlay from "../Overlay/Overlay";

const Flyout = (props: FlyoutProps, ref) => {
    const [isOpen, setIsOpen] = useState(props.defaultOpen)
    const close = useCallback((event) => {
        setIsOpen(false)
        props?.onClose(event);
    }, [])
    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close
    }), [close])
    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) close(event);
    }, [close])
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleEscape, false);
            document.body.classList.add("h-overflow-hidden");
        }
        return () => {
            document.removeEventListener('keydown', handleEscape, false);
            document.body.classList.remove("h-overflow-hidden");
        }
    }, [handleEscape, isOpen])
    const bm = new BEM("Flyout", {
        default: props.default,
    });
    bm.Append(props.className)
    if (typeof document == "undefined") return null;
    return createPortal(
        isOpen ? (
            <Overlay>
                <ClickOutside onClick={close} className={bm.toString()} style={props.style}>
                    {props.children}
                </ClickOutside>
            </Overlay>
        ) : null,
        document.body
    );
}

export default forwardRef(Flyout);