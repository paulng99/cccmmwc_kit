import { createContext, FC, useReducer } from "react";
import { any } from "underscore";
import appReducer from "./appReducer";

export const initialAppState = {
    userInfo: {},
    loading: false
}

export const AppContext = createContext({
    appState: any,
    appDispatch: () => null
});

export const AppProvider: FC = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, initialAppState)
    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    );
}