import React, { createContext, Dispatch, FC, useReducer } from "react";
import { appReducer } from "./AppReducer";


export const AppContext = createContext<{ appState: any; appDispatch: Dispatch<any> }>({ appState: {}, appDispatch: () => null });

export const AppProvider: FC = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, {"isLoading":true})
    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    )
}
