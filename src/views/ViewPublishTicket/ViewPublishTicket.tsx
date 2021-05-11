// Generated with util/create-component.js
import React from "react";
import { ViewPublishTicketProps } from "./ViewPublishTicket.types";
import "./ViewPublishTicket.scss";
import { BEM } from "../../libs/BEM";
import { TitleSubtitle } from "../../components";
import Container from "../../components/Container/Container";
import FormGroup from "../../components/FormGroup/FormGroup";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import InputFile from "../../components/InputFile/InputFile";
import Grid from "../../components/Grid/Grid";

const ViewPublishTicket: React.FC<ViewPublishTicketProps> = (props) => {
    const bm = new BEM("ViewPublishTicket", {});
    bm.Children(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <Container>
                <TitleSubtitle center {...props.titleSubtitle}/>
                <form className={bm.Children("form")} onSubmit={props.onSubmit}>
                    <FormGroup default>
                        <Input
                            label={"Titulo de la transmisión en vivo"}
                            placeholder={"¡Un evento en vivo súper asombroso conmigo!"}
                            help={"Elija un titulo que describa de qué se tratará su evento"}
                        />
                    </FormGroup>
                    <FormGroup default>
                        <Textarea
                            label={"Breve descripción"}
                            placeholder={"El mejor evento que hayas visto"}
                        />
                    </FormGroup>
                    <FormGroup default>
                        <InputFile
                            label={"Breve descripción"}
                            placeholder={"Subir una imagen o arrastrar y soltar"}
                            subPlaceholder={"PNG, JPG, hasta 2MB"}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Grid col={3}>
                            <Input
                                label={"Fecha"}
                                type={"date"}
                            />
                            <Input
                                label={"Hora"}
                                type={"time"}
                            />
                            <Input
                                label={"Duración"}
                            />
                        </Grid>
                    </FormGroup>
                </form>
            </Container>
        </div>
    );
}

export default ViewPublishTicket;