// Generated with util/create-component.js
import React, { useState } from "react";
import { DashboardProps } from "./Dashboard.types";
import { BEM } from "../../libs/BEM";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";

const Dashboard: React.FC<DashboardProps> = (props) => {
    const [open, setOpen] = useState(props.initialOpen ?? true);
    const bm = new BEM("Dashboard", {
        open,
    });
    return (
        <div style={props.style} className={bm.toString()}>
            <Sidebar open={open} onClickToggle={setOpen} {...props.sidebar}>
                <Menu {...props.menu}/>
            </Sidebar>
            <Navbar {...props.navbar}/>
            <div className={bm.Children("content")}>{props.children}</div>
        </div>
    );
}

export default Dashboard;