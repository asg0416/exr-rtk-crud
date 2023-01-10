import { createContext, useContext } from "react";

const TypeContext = createContext("post");
const useTypeContext = () => useContext(TypeContext);

const DetailContext = createContext();
const useDetailContext = () => useContext(DetailContext);

const ErrorStatusContext = createContext();
const useErrorStatus = () => useContext(ErrorStatusContext);

export { TypeContext, useTypeContext, DetailContext, useDetailContext, ErrorStatusContext, useErrorStatus };
