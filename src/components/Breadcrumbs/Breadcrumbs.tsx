// Generated with util/create-component.js
import React from "react";
import { BreadcrumbsProps } from "./Breadcrumbs.types";
import { BEM } from "../../libs/BEM";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
    const bm = new BEM("Breadcrumbs", {});
    bm.Append(props.className);

    return (
        <ul className={bm.toString()} style={props.style}>
            {props.data.map((data, index) => {
                const cm = (
                    <div className={bm.Children("breadcrumb")}>
                        {data.icon && (<span className={bm.Children("icon")}>{data.icon}</span>)}
                        <span>{data.data}</span>
                        {index < (props.data.length - 1) && (
                            <span className={bm.Children("arrow")}>
                                {data.arrow ?? <FontAwesomeIcon icon={faChevronRight}/>}
                            </span>
                        )}
                    </div>
                );
                return (
                    <li key={index} className={bm.Modifier("item", "active", data.active)}>
                        {props.component?.(cm, data) ?? cm}
                    </li>
                )
            })}
        </ul>
    );
}

export default Breadcrumbs;
