import React, { useContext } from "react";
import { IContextTranslate } from "../interfaces/IContextTranslate";

export const ContextTranslate = React.createContext<IContextTranslate>({
    defaultLang: "es",
    language: ["es", "en", "fr"],
    translates: {}
});
export const useContextTranslate = () => useContext(ContextTranslate);