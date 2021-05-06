// Generated with util/create-component.js
import React from "react";
import ViewVideoDetail from "./ViewVideoDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { EOnClick } from "../../types/events.types";

export default {
    title: "Views/ViewVideoDetail"
};

export const Default = () => (
    <ViewVideoDetail
        header={{
            image: "/images/details.jpeg",
            title: "The Fast and the Furious",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            list: [
                <>
                    <FontAwesomeIcon icon={faStar}/>
                    9.7
                </>,
                "Action",
                "2021",
                "1h 42m",
                "16+",
            ]
        }}
        player={{
            poster: "/images/mar.jpg",
            autoplay: false,
            controls: true,
            src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
        }}
        seasons={[
            {
                title: "Primera temporada",
                data: [
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                ]
            },
            {
                title: "Segunda temporada",
                data: [
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                    {
                        image: "images/dinosaur.png",
                        title: "Tierra de dinosaurios",
                        description: "3 temporadas",
                        label: "18+",
                    },
                ]
            },
        ]}
        genres={["Action", "Thriller", "Crime"]}
        comments={[
            {
                header: {
                    avatar: "/images/avatar.png",
                    title: "Brian Cranston",
                    subTitle: "30.08.2021, 17:53"
                },
                content: {
                    message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                },
                footer: {
                    likes: 12,
                    dislikes: 7,
                    buttons: [
                        {children: "Reply", onClick: () => console.log},
                        {children: "Quote", onClick: () => console.log},
                    ],
                    onClickDisLike(evt: EOnClick) {
                    },
                    onClickLike(evt: EOnClick) {
                    }
                }
            },
            {
                isAnswer: true,
                header: {
                    avatar: "/images/avatar.png",
                    title: "Brian Cranston",
                    subTitle: "30.08.2021, 17:53"
                },
                content: {
                    message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                },
                footer: {
                    likes: 12,
                    dislikes: 7,
                    buttons: [
                        {children: "Reply", onClick: () => console.log},
                        {children: "Quote", onClick: () => console.log},
                    ],
                    onClickDisLike(evt: EOnClick) {
                    },
                    onClickLike(evt: EOnClick) {
                    }
                }
            },
            {
                isAnswer: true,
                header: {
                    avatar: "/images/avatar.png",
                    title: "Brian Cranston",
                    subTitle: "30.08.2021, 17:53"
                },
                content: {
                    message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                },
                footer: {
                    likes: 12,
                    dislikes: 7,
                    buttons: [
                        {children: "Reply", onClick: () => console.log},
                        {children: "Quote", onClick: () => console.log},
                    ],
                    onClickDisLike(evt: EOnClick) {
                    },
                    onClickLike(evt: EOnClick) {
                    }
                }
            },
            {
                isQuote: true,
                header: {
                    avatar: "/images/avatar.png",
                    title: "Brian Cranston",
                    subTitle: "30.08.2021, 17:53"
                },
                content: {
                    message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
                },
                footer: {
                    likes: 12,
                    dislikes: 7,
                    buttons: [
                        {children: "Reply", onClick: () => console.log},
                        {children: "Quote", onClick: () => console.log},
                    ],
                    onClickDisLike(evt: EOnClick) {
                    },
                    onClickLike(evt: EOnClick) {
                    }
                }
            },
            {
                header: {
                    avatar: "/images/avatar.png",
                    title: "Brian Cranston",
                    subTitle: "30.08.2021, 17:53"
                },
                content: {
                    message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                },
                footer: {
                    likes: 12,
                    dislikes: 7,
                    buttons: [
                        {children: "Reply", onClick: () => console.log},
                        {children: "Quote", onClick: () => console.log},
                    ],
                    onClickDisLike(evt: EOnClick) {
                    },
                    onClickLike(evt: EOnClick) {
                    }
                }
            }
        ]}
        subscribe={{
            onChange: () => {
            },
            value: "",
            onSubmit: () => {
            },
        }}
        onSubmitComment={console.log}
        onChangeComment={console.log}
        commentValue={""}
    />
);
