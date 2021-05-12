// Generated with util/create-component.js
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { FlyoutProps } from "./Flyout.types";
import style from "./Flyout.scss";
import { BEM } from "../../libs/BEM";
import ClickOutside from "../ClickOutside/ClickOutside";
import { createPortal } from "react-dom";

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
        if (isOpen) document.addEventListener('keydown', handleEscape, false)
        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, isOpen])
    const bm = new BEM("Flyout", {}, style);
    bm.Append(props.className)
    if (typeof document == "undefined") return null;
    return createPortal(
        isOpen ? (
            <ClickOutside onClick={close} className={bm.toString()} style={props.style}>
                {props.children}
            </ClickOutside>
        ) : null,
        document.body
    );
}

export default forwardRef(Flyout);