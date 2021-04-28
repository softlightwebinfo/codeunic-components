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
                                title={"Hola Juan"}
                                subTitle={"Disponible"}
                            />
                        }
                    />
                    <Dropdown
                        trigger={<FontAwesomeIcon icon={faEnvelope}/>}
                        menu={<DropdownMenu title={"Hola Juan"} subTitle={"Disponible"}/>}
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
        Hello world
    </Dashboard>
);