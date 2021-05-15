// Generated with util/create-component.js
import React, { forwardRef } from "react";
import { PortalProps } from "./Portal.types";
import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

const Portal = forwardRef(({children, id}: PortalProps, innerRef) => {
    const target = usePortal(id);
    return createPortal(
        children,
        target,
    );
});
export default Portal;