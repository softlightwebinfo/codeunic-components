// Generated with util/create-component.js
import React, { useCallback, useState } from "react";
import { WidgetCurrencyCalculatorProps } from "./WidgetCurrencyCalculator.types";
import { BEM } from "../../libs/BEM";
import Widget from "../Widget/Widget";
import TitleSubtitle from "../../components/TitleSubtitle/TitleSubtitle";
import Grid from "../../components/Grid/Grid";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import FormGroup from "../../components/FormGroup/FormGroup";

const WidgetCurrencyCalculator: React.FC<WidgetCurrencyCalculatorProps> = (props) => {
    const [currency, setCurrency] = useState(0);
    const [from, setFrom] = useState("euro");
    const [to, setTo] = useState("usd");
    const [amount, setAmount] = useState(0);
    const bm = new BEM("WidgetCurrencyCalculator", {});
    bm.Append(props.className)

    const calculate = useCallback((e) => {
        e.preventDefault();
        const usd = 1.13;
        const euro = .80;
        if (from === "euro" && to === "usd") setCurrency(usd * amount);
        if (from === "usd" && to === "euro") setCurrency(euro * amount);
    }, [from, to, amount]);

    return (
        <Widget default data-testid="WidgetCurrencyCalculator" className={bm.toString()} style={props.style}>
            <TitleSubtitle title={"Currency Calculator"} subTitle={"Calculate"}/>
            <span className={bm.Children("currency")}>{currency}</span>
            <form onSubmit={calculate}>
                <FormGroup default>
                    <Grid col={3}>
                        <Select
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            label={{
                                label: "From"
                            }}
                            options={[
                                {label: "EURO", value: "euro"},
                                {label: "USD", value: "usd"},
                            ]}
                        />
                        <Select
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            label={{
                                label: "From"
                            }}
                            options={[
                                {label: "EURO", value: "euro"},
                                {label: "USD", value: "usd"},
                            ]}
                        />
                        <Input
                            value={amount.toString()}
                            placeholder={"Amount"}
                            label={"Amount"}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </Grid>
                </FormGroup>
                <Button type={"submit"} dark theme={"primary"}>Calculate</Button>
            </form>
        </Widget>
    );
}

export default WidgetCurrencyCalculator;