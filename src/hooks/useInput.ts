import { useState } from "react";

export const useInput = (initialValue = ""): [string, (evt: any) => void] => {
    const [value, setValue] = useState<string>(initialValue);
    const onChange = (evt: any) => {
        setValue(evt.target.value);
    }
    return [value, onChange];
};