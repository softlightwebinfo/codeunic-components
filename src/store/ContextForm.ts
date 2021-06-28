import React, { useContext } from "react";
import { IContextForm } from "../interfaces/IContextForm";

export const ContextForm = React.createContext<IContextForm>({

});
export const useContextForm = () => useContext(ContextForm);