import { useCallback, useEffect } from "react";
import { useContextForm } from "../store/ContextForm";
import { IUseForm } from "../interfaces/IUseForm";

export const useForm = (props: IUseForm) => {
    const context = useContextForm();

    useEffect(() => {
        context?.setValue?.(props.id, props.value ?? props.defaultValue);
    }, []);

    const onChange = useCallback((e) => {
        let value = e.target.value;
        if (props.type === "checkbox") {
            value = e.target.checked;
        }
        context?.setValue?.(props.id, value);
        props?.onChange?.(e)
    }, []);

    return {
        context,
        onChange,
        value: context ? context?.getValue?.(props.id) ?? "" : props.value,
    }
};