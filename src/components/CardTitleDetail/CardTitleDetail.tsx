import React from "react";
import { CardTitleDetailProps } from "./CardTitleDetail.types";
import style from "./CardTitleDetail.scss";
import ListData from "../ListData/ListData";
import ButtonDefault from "../ButtonDefault/ButtonDefault";
import Button from "../Button/Button";
import { BEM } from "../../libs/BEM";

const CardTitleDetail: React.FC<CardTitleDetailProps> = (props) => {
    const bm = new BEM("CardTitleDetail", {}, style);
    bm.Append(props.className);
    const {list = []} = props;
    return (
        <div className={bm.toString()} style={props.style}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <ListData data={list}/>
            <div className={bm.Children("buttons")}>
                <ButtonDefault
                    onClick={props.onClickPlay}
                >
                    {props.buttonPlayText ?? 'Reproducir ahora'}
                </ButtonDefault>
                <Button onClick={props.onClickDetail}>{props.buttonDetailText ?? 'Más detalles'}</Button>
            </div>
            <style>{`
                h1 {              
                    background: url(/images/bigTitle.jpg)                  
                }
            `}</style>
        </div>
    );
}

export default CardTitleDetail;

