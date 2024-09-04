import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer";
import { root } from "../saga/root.saga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== "production" ? true : false
})


sagaMiddleware.run(root)

export default store;