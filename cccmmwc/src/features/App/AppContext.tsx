import React, { createContext, Dispatch, FC, useReducer } from "react";
import { appReducer } from "./AppReducer";

//interface of IAppSate
export interface IAppState {
    "isLoading": boolean,
    "userInfo": object
}

//Initital State
const initialState = {
    "isLoading": false,
    "userInfo": JSON.parse(localStorage.getItem("userInfo")||"{}"),
}

//AppContext
export const AppContext = createContext<{ appState: any; appDispatch: Dispatch<any> }>({
    appState: initialState,
    appDispatch: () => null
});

//APp Provider
export const AppProvider: FC = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, initialState)
    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    )
}
