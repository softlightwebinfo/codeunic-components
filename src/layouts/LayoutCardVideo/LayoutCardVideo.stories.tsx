// Generated with util/create-component.js
import React from "react";
import LayoutCardVideo from "./LayoutCardVideo";
import Grid from "../../components/Grid/Grid";
import { Carousel } from "../../index";
import TitleCategory from "../../components/TitleCategory/TitleCategory";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";

export default {
    title: "Layouts/CardVideo"
};

export const Default = () => (
    <LayoutCardVideo
        image={"images/dinosaur.png"}
        title={"Tierra de dinosaurios"}
        description={"3 temporadas"}
        label={"18+"}
    />
);

export const Multiple = () => (
    <Grid col={4}>
        <LayoutCardVideo
            image={"images/dinosaur.png"}
            title={"Tierra de dinosaurios"}
            description={"3 temporadas"}
            label={"18+"}
        />
        <LayoutCardVideo
            image={"images/arena.jpg"}
            title={"Polvo de arena"}
            description={"2h 30m"}
            label={"13+"}
        />
        <LayoutCardVideo
            image={"images/boop.jpg"}
            title={"Boop Bitty"}
            description={"2h 30m"}
            label={"15+"}
        />
        <LayoutCardVideo
            image={"images/suspiro.jpg"}
            title={"El ultimo suspiro"}
            description={"1h 40m"}
            label={"15+"}
        />
    </Grid>
);

export const CarouselSlide = () => (
    <Carousel
        col={4}
        component={(props) => (<LayoutCardVideo{...props}/>)}
        data={[
            {
                image: "images/dinosaur.png",
                title: "Tierra de dinosaurios",
                description: "3 temporadas",
                label: "18+",
            },
            {
                image: "images/arena.jpg",
                title: "Polvo de arena",
                description: "2h 30m",
                label: "13+",
            },
            {
                image: "images/boop.jpg",
                title: "Boop Bitty",
                description: "2h 30m",
                label: "15+"
            },
            {
                image: "images/suspiro.jpg",
                title: "El ultimo suspiro",
                description: "1h 40m",
                label: "15+",
            },
            {
                image: "images/peligro.jpg",
                title: "Otro peligro",
                description: "3h",
                label: "25+",
            },
            {
                image: "images/1980.jpg",
                title: "1980",
                description: "2h 45m",
                label: "11+",
            },
            {
                image: "images/sombra.jpg",
                title: "Sombra",
                description: "2h 10m",
                label: "11+"
            },
            {
                image: "images/mar.jpg",
                title: "Dentro del mar",
                description: "1h 25m",
                label: "11+",
            }
        ]}
    />
);
export const CarouselSlideCategory = () => (
    <ContainerFluid default>
        <TitleCategory title={"Streamings"}/>
        <Carousel
            col={4}
            component={(props) => (
                <LayoutCardVideo
                    {...props}
                />
            )}
            data={[
                {
                    image: "images/dinosaur.png",
                    title: "Tierra de dinosaurios",
                    description: "3 temporadas",
                    label: "18+",
                },
                {
                    image: "images/arena.jpg",
                    title: "Polvo de arena",
                    description: "2h 30m",
                    label: "13+",
                },
                {
                    image: "images/boop.jpg",
                    title: "Boop Bitty",
                    description: "2h 30m",
                    label: "15+"
                },
                {
                    image: "images/suspiro.jpg",
                    title: "El ultimo suspiro",
                    description: "1h 40m",
                    label: "15+",
                },
                {
                    image: "images/peligro.jpg",
                    title: "Otro peligro",
                    description: "3h",
                    label: "25+",
                },
                {
                    image: "images/1980.jpg",
                    title: "1980",
                    description: "2h 45m",
                    label: "11+",
                },
                {
                    image: "images/sombra.jpg",
                    title: "Sombra",
                    description: "2h 10m",
                    label: "11+"
                },
                {
                    image: "images/mar.jpg",
                    title: "Dentro del mar",
                    description: "1h 25m",
                    label: "11+",
                }
            ]}
        />
        <TitleCategory title={"Conciertos"}/>
        <Carousel
            col={4}
            component={(props) => (
                <LayoutCardVideo
                    {...props}
                />
            )}
            data={[
                {
                    image: "images/dinosaur.png",
                    title: "Tierra de dinosaurios",
                    description: "3 temporadas",
                    label: "18+",
                },
                {
                    image: "images/arena.jpg",
                    title: "Polvo de arena",
                    description: "2h 30m",
                    label: "13+",
                },
                {
                    image: "images/boop.jpg",
                    title: "Boop Bitty",
                    description: "2h 30m",
                    label: "15+"
                },
                {
                    image: "images/suspiro.jpg",
                    title: "El ultimo suspiro",
                    description: "1h 40m",
                    label: "15+",
                },
                {
                    image: "images/peligro.jpg",
                    title: "Otro peligro",
                    description: "3h",
                    label: "25+",
                },
                {
                    image: "images/1980.jpg",
                    title: "1980",
                    description: "2h 45m",
                    label: "11+",
                },
                {
                    image: "images/sombra.jpg",
                    title: "Sombra",
                    description: "2h 10m",
                    label: "11+"
                },
                {
                    image: "images/mar.jpg",
                    title: "Dentro del mar",
                    description: "1h 25m",
                    label: "11+",
                }
            ]}
        />
        <TitleCategory title={"Teatro"}/>
        <Carousel
            col={4}
            component={(props) => (
                <LayoutCardVideo
                    {...props}
                />
            )}
            data={[
                {
                    image: "images/dinosaur.png",
                    title: "Tierra de dinosaurios",
                    description: "3 temporadas",
                    label: "18+",
                },
                {
                    image: "images/arena.jpg",
                    title: "Polvo de arena",
                    description: "2h 30m",
                    label: "13+",
                },
                {
                    image: "images/boop.jpg",
                    title: "Boop Bitty",
                    description: "2h 30m",
                    label: "15+"
                },
                {
                    image: "images/suspiro.jpg",
                    title: "El ultimo suspiro",
                    description: "1h 40m",
                    label: "15+",
                },
                {
                    image: "images/peligro.jpg",
                    title: "Otro peligro",
                    description: "3h",
                    label: "25+",
                },
                {
                    image: "images/1980.jpg",
                    title: "1980",
                    description: "2h 45m",
                    label: "11+",
                },
                {
                    image: "images/sombra.jpg",
                    title: "Sombra",
                    description: "2h 10m",
                    label: "11+"
                },
                {
                    image: "images/mar.jpg",
                    title: "Dentro del mar",
                    description: "1h 25m",
                    label: "11+",
                }
            ]}
        />
        <TitleCategory title={"Clown"}/>
        <Carousel
            col={4}
            component={(props) => (
                <LayoutCardVideo
                    {...props}
                />
            )}
            data={[
                {
                    image: "images/dinosaur.png",
                    title: "Tierra de dinosaurios",
                    description: "3 temporadas",
                    label: "18+",
                },
                {
                    image: "images/arena.jpg",
                    title: "Polvo de arena",
                    description: "2h 30m",
                    label: "13+",
                },
                {
                    image: "images/boop.jpg",
                    title: "Boop Bitty",
                    description: "2h 30m",
                    label: "15+"
                },
                {
                    image: "images/suspiro.jpg",
                    title: "El ultimo suspiro",
                    description: "1h 40m",
                    label: "15+",
                },
                {
                    image: "images/peligro.jpg",
                    title: "Otro peligro",
                    description: "3h",
                    label: "25+",
                },
                {
                    image: "images/1980.jpg",
                    title: "1980",
                    description: "2h 45m",
                    label: "11+",
                },
                {
                    image: "images/sombra.jpg",
                    title: "Sombra",
                    description: "2h 10m",
                    label: "11+"
                },
                {
                    image: "images/mar.jpg",
                    title: "Dentro del mar",
                    description: "1h 25m",
                    label: "11+",
                }
            ]}
        />
        <TitleCategory title={"Magia"}/>
        <Carousel
            col={4}
            component={(props) => (
                <LayoutCardVideo
                    {...props}
                />
            )}
            data={[
                {
                    image: "images/dinosaur.png",
                    title: "Tierra de dinosaurios",
                    description: "3 temporadas",
                    label: "18+",
                },
                {
                    image: "images/arena.jpg",
                    title: "Polvo de arena",
                    description: "2h 30m",
                    label: "13+",
                },
                {
                    image: "images/boop.jpg",
                    title: "Boop Bitty",
                    description: "2h 30m",
                    label: "15+"
                },
                {
                    image: "images/suspiro.jpg",
                    title: "El ultimo suspiro",
                    description: "1h 40m",
                    label: "15+",
                },
                {
                    image: "images/peligro.jpg",
                    title: "Otro peligro",
                    description: "3h",
                    label: "25+",
                },
                {
                    image: "images/1980.jpg",
                    title: "1980",
                    description: "2h 45m",
                    label: "11+",
                },
                {
                    image: "images/sombra.jpg",
                    title: "Sombra",
                    description: "2h 10m",
                    label: "11+"
                },
                {
                    image: "images/mar.jpg",
                    title: "Dentro del mar",
                    description: "1h 25m",
                    label: "11+",
                }
            ]}
        />
        <TitleCategory title={"Grabaciones"}/>
        <Carousel
            col={4}
            component={(props) => (
                <LayoutCardVideo
                    {...props}
                />
            )}
            data={[
                {
                    image: "images/dinosaur.png",
                    title: "Tierra de dinosaurios",
                    description: "3 temporadas",
                    label: "18+",
                },
                {
                    image: "images/arena.jpg",
                    title: "Polvo de arena",
                    description: "2h 30m",
                    label: "13+",
                },
                {
                    image: "images/boop.jpg",
                    title: "Boop Bitty",
                    description: "2h 30m",
                    label: "15+"
                },
                {
                    image: "images/suspiro.jpg",
                    title: "El ultimo suspiro",
                    description: "1h 40m",
                    label: "15+",
                },
                {
                    image: "images/peligro.jpg",
                    title: "Otro peligro",
                    description: "3h",
                    label: "25+",
                },
                {
                    image: "images/1980.jpg",
                    title: "1980",
                    description: "2h 45m",
                    label: "11+",
                },
                {
                    image: "images/sombra.jpg",
                    title: "Sombra",
                    description: "2h 10m",
                    label: "11+"
                },
                {
                    image: "images/mar.jpg",
                    title: "Dentro del mar",
                    description: "1h 25m",
                    label: "11+",
                }
            ]}
        />
    </ContainerFluid>
);