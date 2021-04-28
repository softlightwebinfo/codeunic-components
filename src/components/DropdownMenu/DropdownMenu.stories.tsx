// Generated with util/create-component.js
import React from "react";
import DropdownMenu from "./DropdownMenu";
import { faHome, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonDefault from "../ButtonDefault/ButtonDefault";
import SubCard from "../SubCard/SubCard";

export default {
    title: "Dropdown/DropdownMenu"
};

export const Default = () => (
    <DropdownMenu
        title={"Hola Nik Jone"}
        subTitle={"Disponible"}
        footer={<ButtonDefault onClick={console.log}>Desconectar <FontAwesomeIcon icon={faLock}/></ButtonDefault>}
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
);