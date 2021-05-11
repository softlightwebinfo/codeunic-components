// Generated with util/create-component.js
import React from "react";
import ViewTicketHomePage from "./ViewTicketHomePage";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
    title: "Views/ViewTicketHomePage"
};

export const Default = () => (
    <ViewTicketHomePage
        button={{
            children: "Crear un evento en vivo",
        }}
        steps={[
            {
                icon: <FontAwesomeIcon icon={faHome}/>,
                title: "Crear una secuencia",
                subTitle: "Cree rápidamente su evento con boleto con unos pocos clics, todo protegido detrás de un muro de pago."
            },
            {
                icon: <FontAwesomeIcon icon={faHome}/>,
                title: "Comparte tu evento",
                subTitle: "Comparta la URL de su evento privado con sus fans, o incluso incorpórela en su propio sitio web."
            },
            {
                icon: <FontAwesomeIcon icon={faHome}/>,
                title: "Ir a live",
                subTitle: "Inicie su transmisión y permita que sus fanáticos lo apoyen comprando un boleto y mirándolo en vivo.",
            }
        ]}
        title={{
            title: "Plataforma de transmisión en vivo de pago por evento",
            subTitle: "Vende entradas y ponte en marcha"
        }}
        titleStep={{
            title: "Pan comido",
            subTitle: "Cree su transmisión en vivo privada con boleto con solo unos pocos clics.\n Lucra se mantiene fuera de su camino para que pueda obtener ingresos y\n hacer crecer su base de fans."
        }}
        titleFeatures={{
            title: "Características sin la hinchazón",
            subTitle: "Hemos seleccionado cuidadosamente nuestras funciones para que su\ntransmisión en vivo se desarrolle sin problemas, sin dejar de ser simple y fácil."
        }}
        video={"/videos/video.mp4"}
        features={[
            {
                title: "Venta de entradas",
                text: "Vende fácilmente entradas para tus eventos de transmisión en vivo; tú fijas el precio.",
                icon: <FontAwesomeIcon icon={faHome}/>,
            },
            {
                title: "Venta de entradas",
                text: "Vende fácilmente entradas para tus eventos de transmisión en vivo; tú fijas el precio.",
                icon: <FontAwesomeIcon icon={faHome}/>,
            },
            {
                title: "Venta de entradas",
                text: "Vende fácilmente entradas para tus eventos de transmisión en vivo; tú fijas el precio.",
                icon: <FontAwesomeIcon icon={faHome}/>,
            },
            {
                title: "Venta de entradas",
                text: "Vende fácilmente entradas para tus eventos de transmisión en vivo; tú fijas el precio.",
                icon: <FontAwesomeIcon icon={faHome}/>,
            },
            {
                title: "Venta de entradas",
                text: "Vende fácilmente entradas para tus eventos de transmisión en vivo; tú fijas el precio.",
                icon: <FontAwesomeIcon icon={faHome}/>,
            },
            {
                title: "Venta de entradas",
                text: "Vende fácilmente entradas para tus eventos de transmisión en vivo; tú fijas el precio.",
                icon: <FontAwesomeIcon icon={faHome}/>,
            }
        ]}
    />
);