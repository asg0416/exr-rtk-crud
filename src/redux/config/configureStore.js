import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import post from "../modules/postSlice";

export const store = configureStore({
  reducer: { post },
  devTools: process.env.NODE_ENV !== "production", // chrome 익스텐션 비활성화
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
