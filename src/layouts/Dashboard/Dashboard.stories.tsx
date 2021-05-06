// Generated with util/create-component.js
import React from "react";
import Dashboard from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faBell,
    faComment,
    faEnvelope,
    faHome,
    faLock,
    faStar,
    faTags
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../components/Dropdown/Dropdown";
import Avatar from "../../components/Avatar/Avatar";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import { ButtonDefault } from "../../components";
import SubCard from "../../components/SubCard/SubCard";
import AvatarHeader from "../../components/AvatarHeader/AvatarHeader";
import Grid from "../../components/Grid/Grid";
import GridColumn from "../../components/GridColumn/GridColumn";
import WidgetStat from "../../widgets/WidgetStat/WidgetStat";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import WidgetRatedItem from "../../widgets/WidgetRatedItem/WidgetRatedItem";
import Widget from "../../widgets/Widget/Widget";
import RatedItem from "../../components/RatedItem/RatedItem";

export default {
    title: "Dashboard/Dashboard"
};

export const Default = () => (
    <Dashboard
        sidebar={{
            image: "/images/logo.png",
            logo: "STREAM PRIME",
        }}
        menu={{
            menu: {
                back: {
                    label: "Go to back",
                    icon: <FontAwesomeIcon icon={faArrowLeft}/>
                },
                index: {
                    label: "Dashboard",
                    icon: <FontAwesomeIcon icon={faHome}/>
                },
                classification: {
                    label: "Classification",
                    icon: <FontAwesomeIcon icon={faStar}/>
                },
                comments: {
                    label: "Comments",
                    icon: <FontAwesomeIcon icon={faComment}/>
                },
                prices: {
                    label: "Prices",
                    icon: <FontAwesomeIcon icon={faTags}/>
                },
            }
        }}
        navbar={{
            right: (
                <>
                    <Dropdown
                        trigger={<FontAwesomeIcon icon={faBell}/>}
                        menu={
                            <DropdownMenu
                                title={"All notifications"}
                                badge={"5"}
                            >
                                {[...new Array(4)].map(() => (
                                    <AvatarHeader
                                        default
                                        avatar={"/images/avatar.png"}
                                        title={"Why do we use it?"}
                                        subTitle={"20 Apr"}
                                    />
                                ))}
                            </DropdownMenu>
                        }
                    />
                    <Dropdown
                        trigger={<FontAwesomeIcon icon={faEnvelope}/>}
                        menu={
                            <DropdownMenu
                                title={"All messages"}
                                badge={"20"}
                            >
                                {[...new Array(4)].map(() => (
                                    <AvatarHeader
                                        default
                                        avatar={"/images/avatar.png"}
                                        title={"Why do we use it?"}
                                        subTitle={"20 Apr"}
                                    />
                                ))}
                            </DropdownMenu>
                        }
                    />
                    <Dropdown
                        trigger={<Avatar image={"/images/avatar.png"}/>}
                        menu={
                            <DropdownMenu
                                title={"Hola Juan"}
                                subTitle={"Disponible"}
                                footer={
                                    <ButtonDefault
                                        onClick={console.log}
                                    >
                                        <span> Desconectar </span> <FontAwesomeIcon icon={faLock}/>
                                    </ButtonDefault>
                                }
                            >
                                <SubCard
                                    icon={<FontAwesomeIcon icon={faHome}/>}
                                    title={"Mi perfil"}
                                    subTitle={"Ver detalles personal."}
                                />
                                <SubCard
                                    icon={<FontAwesomeIcon icon={faHome}/>}
                                    title={"Editar perfil"}
                                    subTitle={"Modifique sus datos personales."}
                                />
                                <SubCard
                                    icon={<FontAwesomeIcon icon={faHome}/>}
                                    title={"Configuración de cuenta"}
                                    subTitle={"Administre los parámetros de su cuenta."}
                                />
                                <SubCard
                                    icon={<FontAwesomeIcon icon={faHome}/>}
                                    title={"Configuración de privacidad"}
                                    subTitle={"Controle sus parametros de privacidad."}
                                />
                            </DropdownMenu>
                        }
                    />
                </>
            )
        }}
    >
       <ContainerFluid all>
           <Grid col={12}>
               <GridColumn gridColumn={"span 8"}>
                   <Grid col={4}>
                       <WidgetStat
                           text={"View"}
                           textSecondary={35}
                           color={"red"}
                           title={"+24k"}
                           icon={<FontAwesomeIcon icon={faHome}/>}
                           isUp={true}
                       />
                       <WidgetStat
                           text={"View"}
                           textSecondary={35}
                           color={"red"}
                           title={"+24k"}
                           icon={<FontAwesomeIcon icon={faHome}/>}
                           isUp={true}
                       />
                       <WidgetStat
                           text={"View"}
                           textSecondary={35}
                           color={"red"}
                           title={"+24k"}
                           icon={<FontAwesomeIcon icon={faHome}/>}
                           isUp={true}
                       />
                       <WidgetStat
                           text={"View"}
                           textSecondary={35}
                           color={"red"}
                           title={"+24k"}
                           icon={<FontAwesomeIcon icon={faHome}/>}
                           isUp={true}
                       />
                   </Grid>
               </GridColumn>
               <GridColumn gridColumn={"span 8"}>
                   <WidgetRatedItem
                       title={"Top Rated Item"}
                       data={[
                           {image: "/images/category.jpeg", title: "Last Race", description: "TV show", views: "120", play: "20"},
                           {image: "/images/category.jpeg", title: "Last Race 2", description: "TV show", views: "120", play: "20"},
                           {image: "/images/category.jpeg", title: "Last Race 3", description: "TV show", views: "120", play: "20"},
                           {image: "/images/category.jpeg", title: "Last Race 4", description: "TV show", views: "120", play: "20"},
                           {image: "/images/category.jpeg", title: "Last Race 5", description: "TV show", views: "120", play: "20"},
                           {image: "/images/category.jpeg", title: "Last Race 6", description: "TV show", views: "120", play: "20"},
                           {image: "/images/category.jpeg", title: "Last Race 7", description: "TV show", views: "120", play: "20"},
                           {image: "/images/category.jpeg", title: "Last Race 8", description: "TV show", views: "120", play: "20"},
                           {image: "/images/category.jpeg", title: "Last Race 9", description: "TV show", views: "120", play: "20"},
                           {image: "/images/category.jpeg", title: "Last Race 10", description: "TV show", views: "120", play: "20"},
                       ]}
                   />
               </GridColumn>
               <GridColumn gridColumn={"9/span 4"} gridRow={"1/span 2"}>
                   <Widget>
                       <RatedItem title={"Last Race"} description={"TV Show"} views={"5000"} play={"200"} image={"/images/mar.jpg"}/>
                   </Widget>
               </GridColumn>
           </Grid>
       </ContainerFluid>
    </Dashboard>
);