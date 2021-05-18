// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface CalendarProps extends IProps {
    onClick?(day: number, dayjs);

    current?: boolean;
    date: string | any;
}
