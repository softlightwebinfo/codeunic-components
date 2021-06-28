// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { SidebarProps } from "../../components/Sidebar/Sidebar.types";
import { MenuProps } from "../../components/Menu/Menu.types";
import { NavbarProps } from "../../components/Navbar/Navbar.types";

export interface DashboardProps extends IProps {
    menu: MenuProps;
    sidebar: SidebarProps;
    navbar: NavbarProps;
    initialOpen?: boolean;
}
