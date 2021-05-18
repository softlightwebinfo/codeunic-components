// Generated with util/create-component.js
import React, { useCallback } from "react";
import { IKanbanPanel, KanbanProps } from "./Kanban.types";
import { BEM } from "../../libs/BEM";
import Panel from "../Panel/Panel";
import PanelTask from "../PanelTask/PanelTask";
import { PanelTaskProps } from "../PanelTask/PanelTask.types";

const Kanban: React.FC<KanbanProps> = (props) => {
    const bm = new BEM("Kanban", {});
    bm.Append(props.className);
    const onClick = useCallback((task: PanelTaskProps, panel: IKanbanPanel) => () => {
        props.onClick?.(task, panel);
    }, []);
    return (
        <div className={bm.toString()} style={props.style}>
            <div className={bm.Children("content")}>
                {props.panel.map((panel) => (
                    <Panel
                        title={panel.title}
                        key={panel.id}
                    >
                        {panel.tasks.map((task) => (
                            <PanelTask {...task} key={task.id} onClick={onClick(task, panel)}/>
                        ))}
                    </Panel>
                ))}
            </div>
        </div>
    );
}

export default Kanban;