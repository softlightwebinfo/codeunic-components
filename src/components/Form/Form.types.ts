// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IObject } from "../../interfaces/TObject";

export interface FormProps extends IProps {
    isPreventDefault?: boolean;
    values?: IObject;

    onSubmit(e, attr: {
        onClean?();
    });

    onChange(e);
}
