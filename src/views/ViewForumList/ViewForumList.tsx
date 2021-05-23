// Generated with util/create-component.js
import React from "react";
import { ViewForumListProps } from "./ViewForumList.types";
import { BEM } from "../../libs/BEM";
import { TableBase } from "@codeunic/components";

const ViewForumList: React.FC<ViewForumListProps> = (props) => {
    const bm = new BEM("ViewForumList", {});
    bm.Append(props.className);
    return (
        <div data-testid="ViewForumList" className={bm.toString()} style={props.style}>
            {props.data.map((item, index) => (
                <TableBase
                    dark
                    style={{marginBottom: 40}}
                    hover
                    key={index}
                    rows={item.data}
                    columns={[
                        {key: "title", text: item.title},
                        {key: "threads", text: "Threads"},
                        {key: "replies", text: "Replies"},
                        {key: "lastUpdate", text: "Last update"},
                    ]}
                />
            ))}
        </div>
    );
}

export default ViewForumList;