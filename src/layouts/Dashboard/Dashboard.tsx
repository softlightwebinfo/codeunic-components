// Generated with util/create-component.js
import React from "react";

import { DashboardProps } from "./Dashboard.types";

import style from "./Dashboard.scss";
import { BEM } from "../../libs/BEM";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";

const Dashboard: React.FC<DashboardProps> = (props) => {
    const bm = new BEM("Dashboard", {}, style);
    return (
        <div style={props.style} className={bm.toString()}>
            <Sidebar {...props.sidebar}>
                <Menu {...props.menu}/>
            </Sidebar>
            <Navbar {...props.navbar}/>
            <div className={bm.Children("content")}>{props.children}</div>
        </div>
    );
}

export default Dashboard;

