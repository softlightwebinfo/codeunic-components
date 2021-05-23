// Generated with util/create-component.js
import React from "react";
import { ViewForumThreadsProps } from "./ViewForumThreads.types";
import { BEM } from "../../libs/BEM";
import { TableBase } from "@codeunic/components";

const ViewForumThreads: React.FC<ViewForumThreadsProps> = (props) => {
    const bm = new BEM("ViewForumThreads", {});
    bm.Append(props.className);
    return (
        <div data-testid="ViewForumThreads" className={bm.toString()} style={props.style}>
            <TableBase
                dark
                style={{marginBottom: 40}}
                hover
                rows={props.data}
                columns={[
                    {key: "title", text: "Title"},
                    {key: "status", text: "Status"},
                    {key: "replies", text: "Replies"},
                    {key: "lastUpdate", text: "Last update"},
                ]}
            />
        </div>
    );
}

export default ViewForumThreads;