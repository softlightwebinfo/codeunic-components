// Generated with util/create-component.js
import React from "react";
import TablePrice from "./TablePrice";

export default {
    title: "TablePrice/TablePrice"
};

export const Default = () => <TablePrice
    onClick={console.log}
    active={1}
    columns={[
        {title: "Libre", price: 0, currency: "€", type: "mes"},
        {title: "Plus", price: 0, currency: "€", type: "mes"},
        {title: "Premium", price: 0, currency: "€", type: "mes"},
    ]}
    data={[
        {title: "Entretenimiento", data: [false, true, true]},
        {title: "Programas de television", data: [false, true, true]},
        {title: "Peliculas de profesionales", data: [false, true, true]},
        {title: "Nuevas peliculas", data: [false, true, false]},
        {title: "Streaming especial", data: [false, true, false]},
        {title: "Calidad de video", data: ["SD (480p)", "FHD (1080p)", "HD (720p)"]},
    ]}
/>;