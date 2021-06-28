// Generated with util/create-component.js
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { FormProps } from "./Form.types";
import { BEM } from "../../libs/BEM";
import { ContextForm } from "../../store/ContextForm";

const Form = (props: FormProps, ref) => {
    const {isPreventDefault = true} = props;
    const [values, setState] = useState(new Map());

    const bm = new BEM("Form", {});
    bm.Append(props.className);

    useEffect(() => {
        if (!props.values) return;
        setState(prv => {
            prv = new Map(prv);
            Object.entries(props.values).forEach((([key, value]) => {
                prv.set(key, value);
            }))
            return prv;
        });
    }, [props.values]);

    const setValue = useCallback((id, value) => {
        setState(prv => {
            return (new Map(prv))
                .set(id, value);
        })
    }, []);

    const getValue = useCallback((id: string) => {
        return values.get(id);
    }, [values]);

    useEffect(() => {
        props?.onChange?.(values);
    }, [values]);

    const onSubmit = useCallback((e) => {
        if (isPreventDefault) e.preventDefault();
        props?.onSubmit?.(values, {
            onClean,
        });
    }, [values]);

    const onClean = useCallback(() => {
        setState(prv => {
            const mp = new Map();
            prv.forEach((value, key, map) => {
                mp.set(key, undefined);
            })
            return mp;
        });
    }, []);

    useImperativeHandle(ref, () => ({
        onClean,
        onSubmit,
        values,
        getValue,
        setValue,
    }), [values])

    return (
        <ContextForm.Provider value={{
            values,
            setValue,
            getValue
        }}>
            <div data-testid="Form" className={bm.toString()} style={props.style}>
                <form onSubmit={onSubmit}>
                    {props.children}
                </form>
            </div>
        </ContextForm.Provider>
    );
}

export default forwardRef(Form);