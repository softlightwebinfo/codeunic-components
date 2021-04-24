import React, { useContext } from "react";

export const ContextTranslate = React.createContext({});

export const useContextTranslate = () => useContext(ContextTranslate);