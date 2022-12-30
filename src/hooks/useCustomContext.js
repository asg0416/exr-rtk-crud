import { createContext, useContext } from "react";

const TypeContext = createContext("post");
const useTypeContext = () => useContext(TypeContext);

const IdContext = createContext();
const useIdContext = () => useContext(IdContext);

export { TypeContext, useTypeContext, IdContext, useIdContext };
