// Generated with util/create-component.js
import React from "react";
import Select from "./Select";

export default {
    title: "Select"
};

export const Default = () => <Select
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
/>;