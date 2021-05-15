// Generated with util/create-component.js
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Ticket, ViewPublishTicketProps } from "./ViewPublishTicket.types";
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
import { faPlusCircle, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import Select from "../../components/Select/Select";
import Checkbox from "../../components/Checkbox/Checkbox";
import Card from "../../components/Card/Card";
import Flyout from "../../components/Flyout/Flyout";
import HeaderTimes from "../../components/HeaderTimes/HeaderTimes";
import Button from "../../components/Button/Button";
import Toolbar from "../../components/Toolbar/Toolbar";
import Content from "../../components/Content/Content";

const ViewPublishTicket: React.FC<ViewPublishTicketProps> = (props) => {
    const [showAvailable, setShowAvailable] = useState(false);
    const [ticketSelect, setTicketSelect] = useState<Ticket>(null);
    const [state, setState] = useState<any>({});
    const ref = useRef(null);
    const bm = new BEM("ViewPublishTicket", {});
    bm.Children(props.className);

    const onCloseFlyout = useCallback(() => {
        ref.current.close();
        if (!ticketSelect) setTicketSelect(null);
    }, [])

    const modifyTicket = useCallback(ticket => {
        setTicketSelect(ticket);
        ref.current.open();
    }, []);

    const onChange = useCallback(evt => {
        setTicketSelect(e => ({
            ...e,
            [evt.target.name]: evt.target.value,
        }));
    }, []);

    const onSaveTicket = useCallback(() => {
        props.onSaveTicket?.(ticketSelect);
        onCloseFlyout();
    }, []);

    useEffect(() => {
        props.onChange?.(ticketSelect);
    }, [ticketSelect]);

    const onChangeState = useCallback((name) => (evt) => {
        setState(e => ({
            ...e,
            [name]: evt.target.value,
        }))
    }, []);

    const onSubmit = useCallback(() => {
        props.onSubmitCreateEvent?.(state, ticketSelect);
    }, []);

    return (
        <div className={bm.toString()} style={props.style}>
            <Container>
                <TitleSubtitle center {...props.titleSubtitle}/>
                <form className={bm.Children("form")} onSubmit={props.onSubmit}>
                    <FormGroup default>
                        <Input
                            onChange={onChangeState("title")}
                            value={state.title}
                            label={"Titulo de la transmisión en vivo"}
                            placeholder={"¡Un evento en vivo súper asombroso conmigo!"}
                            help={"Elija un titulo que describa de qué se tratará su evento"}
                        />
                    </FormGroup>
                    <FormGroup default>
                        <Textarea
                            label={"Breve descripción"}
                            placeholder={"El mejor evento que hayas visto"}
                            onChange={onChangeState("description")}
                            value={state.description}
                        />
                    </FormGroup>
                    <FormGroup default>
                        <InputFile
                            label={"Breve descripción"}
                            placeholder={"Subir una imagen o arrastrar y soltar"}
                            subPlaceholder={"PNG, JPG, hasta 2MB"}
                            onChange={onChangeState("file")}
                            value={state.file}
                        />
                    </FormGroup>
                    <FormGroup default>
                        <Grid col={3}>
                            <Input
                                label={"Fecha"}
                                type={"date"}
                                onChange={onChangeState("date")}
                                value={state.date}
                            />
                            <Input
                                label={"Hora"}
                                type={"time"}
                                onChange={onChangeState("time")}
                                value={state.time}
                            />
                            <Select
                                onChange={onChangeState("duration")}
                                value={state.duration}
                                options={[
                                    {label: "30 Minutes", value: "30"},
                                    {label: "45 Minutes", value: "45"},
                                    {label: "1 hour", value: "60"},
                                    {label: "1.5 hours", value: "90"},
                                    {label: "2 hours", value: "120"},
                                    {label: "2.5 hours", value: "150"},
                                    {label: "3 hours", value: "180"},
                                ]}
                                label={{
                                    label: "Duración"
                                }}
                            />
                        </Grid>
                    </FormGroup>
                    <FormGroup default>
                        <Checkbox
                            text={"Enable chat"}
                            info={"Activamos chat para que se pueda ver, esto es un ejemplo, para ver el tamaño"}
                            onChange={onChangeState("enableChat")}
                            value={state.enableChat}
                        />
                        <Checkbox
                            text={"Show viewer count"}
                            info={"Activamos chat"}
                            onChange={onChangeState("showViewers")}
                            value={state.showViewers}
                        />
                        <Checkbox
                            text={"Require ticket to chat"}
                            info={"Activamos chat"}
                            onChange={onChangeState("ticketChat")}
                            value={state.titleChat}
                        />
                    </FormGroup>
                    <FormGroup
                        helpColor={"red"}
                        default
                        helpOnClick={() => setShowAvailable(true)}
                        help={!showAvailable && "Haga click aquí para obtener opciones de emisión de boletos más avandadas."}
                    >
                        {showAvailable ? (
                            <>
                                <TitleSubtitle
                                    default
                                    group
                                    title={"Available Tickets"}
                                    subTitle={"Click on a ticket to customize."}
                                    className={bm.Children("titleSubtitle")}
                                >
                                    <ButtonDefault original onClick={() => {
                                        ref.current.open();
                                        setTicketSelect(null);
                                    }}>
                                        <FontAwesomeIcon icon={faPlusCircle}/>
                                        Add Ticket
                                    </ButtonDefault>
                                </TitleSubtitle>
                                {props.tickets.map((ticket, index) => (
                                    <Card
                                        onClick={() => modifyTicket(ticket)}
                                        around
                                        key={index}
                                        className={bm.Children("ticket")}
                                    >
                                        <TitleSubtitle
                                            default
                                            group
                                            title={ticket.title}
                                            subTitle={ticket.subTitle}
                                        >
                                            <ButtonDefault original>
                                                {ticket.price} €
                                            </ButtonDefault>
                                        </TitleSubtitle>
                                    </Card>
                                ))}
                            </>
                        ) : (
                            <Grid col={2}>
                                <Input
                                    onChange={onChangeState("maxSeats")}
                                    value={state.maxSeats}
                                    label={"Asientos máximos"}
                                    type={"number"}
                                    placeholder={"Limitado"}
                                />
                                <Input
                                    label={"Precio del asiento"}
                                    type={"number"}
                                    onChange={onChangeState("seatPrice")}
                                    value={state.seatPrice}
                                />
                            </Grid>
                        )}
                    </FormGroup>
                    <ButtonDefault block original onClick={onSubmit}>
                        <FontAwesomeIcon icon={faTicketAlt}/>
                        Create My Event
                    </ButtonDefault>
                </form>
                <Flyout style={{width: 500}} ref={ref} onClose={onCloseFlyout} default>
                    <HeaderTimes padding default onClick={onCloseFlyout} title={"Create ticket"}/>
                    <Content>
                        <form style={{padding: 20}} onSubmit={onSaveTicket}>
                            <FormGroup>
                                <Input
                                    label={"Ticket name"}
                                    placeholder={"General Admission"}
                                    value={ticketSelect?.title}
                                    name={"title"}
                                    onChange={onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Textarea
                                    label={"Ticket Description"}
                                    placeholder={"Exclusive access to watch the live event!"}
                                    value={ticketSelect?.description}
                                    name={"description"}
                                    onChange={onChange}
                                />
                            </FormGroup>
                            <Grid col={2}>
                                <Input
                                    label={"Max Seats"}
                                    placeholder={"Unlimited"}
                                    type={"number"}
                                    value={ticketSelect?.maxSeats?.toString()}
                                    name={"maxSeats"}
                                    onChange={onChange}
                                />
                                <Input
                                    label={"Seat Price"}
                                    placeholder={"10.00"}
                                    type={"number"}
                                    value={ticketSelect?.price?.toString()}
                                    name={"price"}
                                    onChange={onChange}
                                />
                            </Grid>
                        </form>
                    </Content>
                    <Toolbar>
                        <Button onClick={onCloseFlyout}>Cancel</Button>
                        <ButtonDefault onClick={onSaveTicket} original>Save Changes</ButtonDefault>
                    </Toolbar>
                </Flyout>
            </Container>
        </div>
    );
}

export default ViewPublishTicket;