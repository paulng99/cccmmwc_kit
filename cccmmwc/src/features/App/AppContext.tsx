import { AES, enc } from "crypto-js";
import React, { createContext, Dispatch, FC, useReducer } from "react";
import { hashpasscode } from "../../configs/hashpasscode";
import { appReducer } from "./AppReducer";

//interface of IAppSate
export interface IAppState {
    "isLoading": boolean,
    "userInfo": object,
    "groups":Array<string>
}

//Initital State
const initialState = {
    "isLoading": false,
    "userInfo": JSON.parse(AES.decrypt(localStorage.getItem("userInfo")||"",hashpasscode).toString(enc.Utf8)),
    "groups":[],
}

//AppContext
export const AppContext = createContext<{ appState: any; appDispatch: Dispatch<any> }>({
    appState: initialState,
    appDispatch: () => null
});

//App Provider
export const AppProvider: FC = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, initialState)
    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    )
}
