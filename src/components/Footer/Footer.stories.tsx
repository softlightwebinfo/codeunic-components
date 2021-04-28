// Generated with util/create-component.js
import React from "react";
import Footer from "./Footer";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import GridColumn from "../GridColumn/GridColumn";
import Logo from "../Logo/Logo";
import SocialIcons from "../SocialIcons/SocialIcons";
import TitleText from "../TitleText/TitleText";
import Nav from "../Nav/Nav";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default {
    title: "Footer/Footer"
};

export const Default = () => (
    <Footer>
        Hola Footer
    </Footer>
);

export const Containers = () => (
    <Footer>
        <Container>
            <p>Hola footer</p>
        </Container>
    </Footer>
)

export const Layout = () => (
    <Footer>
        <Container>
            <Grid col={5}>
                <GridColumn>
                    <Logo image={"/images/logo.png"} logo={"STREAM PREMIUM"}/>
                    <p style={{marginTop: 20}}>
                        Películas y programas de televisión, cine en línea,
                        plantilla HTML de base de datos de películas.
                    </p>
                    <SocialIcons
                        facebook={"https://www.facebook.com/gaming/code.unic.system"}
                        instagram={"https://www.instagram.com/codeunic_system"}
                        twitter={"https://twitter.com/codeunic"}
                        youtube={"https://www.youtube.com/channel/UCsp8Z6vtXKBzaFZHP6fDzbw"}
                        twitch={"https://www.twitch.tv/codeunicsystem"}
                    />
                </GridColumn>
                <GridColumn>
                    <TitleText text={"Information"}/>
                    <Nav
                        links={[
                            {label: "Sobre nosotros", url: "/example"},
                            {label: "Mi perfil", url: "/example"},
                            {label: "Planes de precios", url: "/example"},
                            {label: "Contactos", url: "/example"},
                        ]}
                    />
                </GridColumn>
                <GridColumn gridColumn={"span 2"}>
                    <TitleText text={"Navegar"}/>
                    <Grid col={2}>
                        <Nav
                            links={[
                                {label: "Televisión en vivo", url: "/example"},
                                {label: "Noticias en vivo", url: "/example"},
                                {label: "Deportes en vivo", url: "/example"},
                                {label: "Biblioteca de transmisión", url: "/example"},
                            ]}
                        />
                        <Nav
                            links={[
                                {label: "Programas de television", url: "/example"},
                                {label: "Películas", url: "/example"},
                                {label: "Niños", url: "/example"},
                                {label: "Colecciones", url: "/example"},
                            ]}
                        />
                    </Grid>
                </GridColumn>
                <GridColumn>
                    <TitleText text={"Ayuda"}/>
                    <Nav
                        links={[
                            {label: "Cuenta y facturación", url: "/example"},
                            {label: "Planes y precios", url: "/example"},
                            {label: "Dispositivos soportados", url: "/example"},
                            {label: "Accesibilidad", url: "/example"},
                        ]}
                    />
                </GridColumn>
            </Grid>
        </Container>
        <Container>
            <FooterCopyright
                left={{
                    name: "STREAM Premium",
                    by: "codeunic",
                    url: "https://www.codeunic.com"
                }}
                right={[
                    {
                        label: "Politica de privacidad",
                        url: "/example"
                    },
                    {
                        label: "Términos y condiciones",
                        url: "/example"
                    }
                ]}
            />
        </Container>
    </Footer>
)