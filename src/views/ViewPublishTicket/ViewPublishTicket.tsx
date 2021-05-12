// Generated with util/create-component.js
import React from "react";
import { ViewPublishTicketProps } from "./ViewPublishTicket.types";
import style from "./ViewPublishTicket.scss";
import { BEM } from "../../libs/BEM";
import { TitleSubtitle } from "../../components";
import Container from "../../components/Container/Container";
import FormGroup from "../../components/FormGroup/FormGroup";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import InputFile from "../../components/InputFile/InputFile";
import Grid from "../../components/Grid/Grid";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

const ViewPublishTicket: React.FC<ViewPublishTicketProps> = (props) => {
    const bm = new BEM("ViewPublishTicket", {}, style);
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
                    <FormGroup default>
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
                    <FormGroup
                        helpColor={"red"}
                        default
                        help={"Haga click aqui para obtener opciones de emisión de boletos más avandadas."}
                    >
                        <Grid col={2}>
                            <Input
                                label={"Asientos máximos"}
                                type={"number"}
                                placeholder={"Limitado"}
                            />
                            <Input
                                label={"Precio del asiento"}
                                type={"number"}
                            />
                        </Grid>
                    </FormGroup>
                    <ButtonDefault block>
                        <FontAwesomeIcon icon={faTicketAlt}/>
                        Create My Event
                    </ButtonDefault>
                </form>
            </Container>
        </div>
    );
}

export default ViewPublishTicket;