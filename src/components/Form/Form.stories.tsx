// Generated with util/create-component.js
import React, { useRef } from "react";
import Form from "./Form";
import Input from "../Input/Input";
import { Widget } from "../../widgets";
import Button from "../Button/Button";
import FormGroup from "../FormGroup/FormGroup";
import Checkbox from "../Checkbox/Checkbox";
import Textarea from "../Textarea/Textarea";
import Select from "../Select/Select";

export default {
    title: "Form"
};

export const Default = () => {
    const ref = useRef(null);
    const onSubmit = (e, type) => {
        console.log(ref);
        console.log("Onsubmit: ", e)
        type.onClean();
    }
    const onChange = (e) => console.log("Onchange: ", e)
    return (
        <Widget default>
            <Form
                values={{name: "Juan carlos", description: "HOLA QUE HACE"}}
                onSubmit={onSubmit}
                onChange={onChange}
                ref={ref}
            >
                <FormGroup>
                    <Input autoFocus id={"name"} label={"Name"} placeholder={"Name"}/>
                </FormGroup>
                <FormGroup default>
                    <Input defaultValue={"hola"} id={"email"} label={"Email"} placeholder={"Email"}/>
                </FormGroup>
                <FormGroup>
                    <Checkbox defaultValue={true} text={"Active"} id={"active"}/>
                </FormGroup>
                <FormGroup>
                    <Select
                        id={"timer"}
                        options={[
                            {label: "30 Minutes", value: "30"},
                            {label: "60 Minutes", value: "31"},
                            {label: "90 Minutes", value: "32"},
                        ]}
                    />
                </FormGroup>
                <FormGroup default>
                    <Textarea id={"description"}/>
                </FormGroup>
                <Button dark type={"submit"}>Submit</Button>
            </Form>
        </Widget>
    )
};
