import { createContext, useContext } from "react";

const TypeContext = createContext("post");
const useTypeContext = () => useContext(TypeContext);

const IdContext = createContext();
const useIdContext = () => useContext(IdContext);

const ErrorStatusContext = createContext();
const useErrorStatus = () => useContext(ErrorStatusContext);

export { TypeContext, useTypeContext, IdContext, useIdContext, ErrorStatusContext, useErrorStatus };
