// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TitleSubtitleProps } from "../../components/TitleSubtitle/TitleSubtitle.types";

export interface ViewPublishTicketProps extends IProps {
    onChange(ticket: Ticket): void;

    onSaveTicket(ticket: Ticket): void;

    onSubmit(evt: any): void;

    onSubmitCreateEvent?(form: IPublishTicketForm, ticket: Ticket): void;

    tickets: Ticket[];
    titleSubtitle: TitleSubtitleProps;
}

export interface Ticket {
    title: string;
    description: string;
    maxSeats: number;
    subTitle: string;
    price: number;
}

export interface IPublishTicketForm {
    title: string;
    description: string;
    file: File;
    date: string;
    time: string;
    duration: string;
    enableChat: boolean;
    showViewers: boolean;
    titleChat: boolean;
    maxSeats: string;
    seatPrice: string;
}