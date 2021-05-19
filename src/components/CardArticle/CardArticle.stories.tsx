// Generated with util/create-component.js
import React from "react";
import CardArticle from "./CardArticle";
import Grid from "../Grid/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Card/CardArticle"
};

export const Default = () => <CardArticle
    image={"/images/photo.jpeg"}
/>;
export const GridArticle = () => (
    <div style={{padding: 20}}>
        <Grid col={4}>
            {[...new Array(12)].map((_, index) => (
                <CardArticle
                    key={index}
                    image={"/images/photo.jpeg"}
                    category={"DETACHED HOUSE · 5y OLD"}
                    title={"750,000"}
                    subTitle={"742 Evergreen Terrace"}
                    buttons={[
                        {
                            children: (
                                <>
                                    <FontAwesomeIcon icon={faBed}/>
                                    3 Bedrooms
                                </>
                            )
                        },
                        {
                            children: (
                                <>
                                    <FontAwesomeIcon icon={faBath}/>
                                    2 Bathrooms
                                </>
                            )
                        },
                    ]}
                    avatar={{
                        avatar: "/images/avatar.png",
                        title: "Tiffany heffnet",
                        subTitle: "(555) 555-4321",
                    }}
                />
            ))}
        </Grid>
    </div>
);