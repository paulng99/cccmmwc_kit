import React, { createContext, Dispatch, FC, useReducer } from "react";
import { appReducer } from "./AppReducer";



const initialState ={
    "isLoading":false,
    "userInfo":{},
}


export const AppContext = createContext<{ appState: any; appDispatch: Dispatch<any> }>({
    appState: initialState,
    appDispatch: () => null
});

export const AppProvider: FC = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, initialState)
    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    )
}
