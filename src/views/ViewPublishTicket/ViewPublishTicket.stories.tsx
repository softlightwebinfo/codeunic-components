// Generated with util/create-component.js
import React from "react";
import ViewPublishTicket from "./ViewPublishTicket";

export default {
    title: "Views/ViewPublishTicket"
};

export const Default = () => <ViewPublishTicket
    onChange={console.log}
    onSaveTicket={console.log}
    onSubmit={console.log}
    titleSubtitle={{
        title: "Crea tu evento a continuación",
        subTitle: "Publica un nuevo evento"
    }}
    tickets={[
        {
            title: "General Admission",
            subTitle: "Tickets Remaining",
            description: "desc",
            maxSeats: 112,
            price: 2
        },
        {
            title: "General Data",
            subTitle: "Tickets Remaining",
            description: "desc",
            maxSeats: 112,
            price: 4
        },
        {
            title: "General Plus",
            subTitle: "Tickets Remaining",
            description: "desc",
            maxSeats: 112,
            price: 7
        },
        {
            title: "General Premium",
            subTitle: "Tickets Remaining",
            description: "desc",
            maxSeats: 112,
            price: 10
        },
    ]}
/>;