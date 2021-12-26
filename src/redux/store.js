import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import { reducerContacts } from './contacts/contactsReducer';



const store = configureStore({
    reducer: { contacts: reducerContacts },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger)
    // devTools: process.env.NODE_ENV !== "production", // => true || false
});

export default store;