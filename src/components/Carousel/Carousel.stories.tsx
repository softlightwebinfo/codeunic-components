// Generated with util/create-component.js
import React from "react";
import Carousel from "./Carousel";
import SlickVideoItem from "../SlickVideoItem/SlickVideoItem";
import { ContextTranslate } from "../../store/ContextTranslate";

export default {
    title: "Carousel"
};

export const Default = () => <Carousel data={[
    {
        image: "https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2014/09/mountain1.jpg?width=1200&enable=upscale",
        title: "El Ejercito",
        description: "Lorem ipsum es simplemente texto de relleno de la industria de la impresion y la composicion typografica. Lorem ipsum ha sudo el texto de relleno estandar de la industria desde el sigo XV1"
    },
    {
        image: "https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2014/09/mountain1.jpg?width=1200&enable=upscale",
        title: "Matorral",
        description: "Lorem ipsum es simplemente texto de relleno de la industria de la impresion y la composicion typografica. Lorem ipsum ha sudo el texto de relleno estandar de la industria desde el sigo XV1"
    },
    {
        image: "https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2014/09/mountain1.jpg?width=1200&enable=upscale",
        title: "Posavaso de vela",
        description: "Lorem ipsum es simplemente texto de relleno de la industria de la impresion y la composicion typografica. Lorem ipsum ha sudo el texto de relleno estandar de la industria desde el sigo XV1"
    },
]}/>;
export const Custom = () => (
    <ContextTranslate.Provider value={{
        defaultLang: "es",
        language: ["es", "en"],
        translates: {
            es: {}
        }
    }}>
        <Carousel
            component={(props) => (<SlickVideoItem{...props}/>)}
            data={[
                {
                    image: "/images/barco.jpg",
                    title: "El Ejercito",
                    description: "Lorem ipsum es simplemente texto de relleno de la industria de la impresion y la composicion typografica. Lorem ipsum ha sudo el texto de relleno estandar de la industria desde el sigo XV1",
                    list: [
                        {header: "Protagonizada", description: "Karen, James, Jones"},
                        {header: "Géneros", description: "Accion"},
                        {header: "Etiqueta", description: "Acción, Adventura, Terror"},
                    ]
                },
                {
                    image: "/images/leon.jpg",
                    title: "Matorral",
                    description: "Lorem ipsum es simplemente texto de relleno de la industria de la impresion y la composicion typografica. Lorem ipsum ha sudo el texto de relleno estandar de la industria desde el sigo XV1"
                },
                {
                    image: "/images/ejercito.jpg",
                    title: "Posavaso de vela",
                    description: "Lorem ipsum es simplemente texto de relleno de la industria de la impresion y la composicion typografica. Lorem ipsum ha sudo el texto de relleno estandar de la industria desde el sigo XV1"
                },
            ]}
        />
    </ContextTranslate.Provider>
);