// Generated with util/create-component.js
import React from "react";
import CardPanelUser from "./CardPanelUser";

export default {
    title: "Card/CardPanelUser"
};

export const Default = () => <div style={{width: 800, margin: 40}}>
    <CardPanelUser
        avatar={{
            avatar: "/images/avatar.png",
            title: "Rebecca Nicholas",
            subTitle: "Product Designer",
            top: "Welcome back,",
        }}
        buttons={[
            {children: "12 Vacation days left"},
            {children: "4 Stick days left"},
            {children: "2 Personal days leftº"},
        ]}
    />
</div>;