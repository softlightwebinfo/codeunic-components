// Generated with util/create-component.js
import React, { useMemo } from "react";
import { PanelTaskProps } from "./PanelTask.types";
import { BEM } from "../../libs/BEM";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PanelTask: React.FC<PanelTaskProps> = (props) => {
    const bm = new BEM("PanelTask", {});
    bm.Append(props.className)
    const checks = useMemo(() => {
        return props.toDoList.filter(item => item.success);
    }, [props.toDoList]);
    return (
        <div onClick={props.onClick} className={bm.toString()} style={props.style}>
            <h4>{props.title}</h4>
            {!!props.toDoList.length && (
                <div className={bm.Children("icon")}>
                    <FontAwesomeIcon icon={faCheckSquare}/>
                    <span>{checks.length}/{props.toDoList.length}</span>
                </div>
            )}
        </div>
    );
}

export default PanelTask;