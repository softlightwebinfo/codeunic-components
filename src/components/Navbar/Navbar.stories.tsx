// Generated with util/create-component.js
import React from "react";
import Navbar from "./Navbar";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import {
    faEuroSign,
    faHome,
    faList,
    faSignInAlt,
    faSignOutAlt,
    faStream,
    faVideo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
    title: "Navbar"
};

export const Default = () => (
    <Navbar/>
);

export const MenuNav = () => (
    <Navbar
        default
        left={<Logo logo={"Stream TV"} image={"/images/logo.png"}/>}
        center={(
            <Menu horizontal menu={{
                "index": {
                    label: "Home",
                    icon: <FontAwesomeIcon icon={faHome}/>
                },
                "catalog": {
                    label: "Catalog",
                    icon: <FontAwesomeIcon icon={faList}/>
                },
                "live": {
                    label: "Live",
                    icon: <FontAwesomeIcon icon={faStream}/>
                },
                "pricing": {
                    label: "Pricing plans",
                    icon: <FontAwesomeIcon icon={faEuroSign}/>
                },
                "movies": {
                    label: "Movies",
                    icon: <FontAwesomeIcon icon={faVideo}/>
                },
            }}/>
        )}
        right={(
            <Menu horizontal menu={{
                "signin": {
                    label: "Sign in",
                    icon: <FontAwesomeIcon icon={faSignInAlt}/>
                },
                "signup": {
                    label: "Sign up",
                    icon: <FontAwesomeIcon icon={faSignOutAlt}/>
                }
            }}/>
        )}
    />
);