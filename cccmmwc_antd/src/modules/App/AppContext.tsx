import { createContext, FC, useReducer } from "react";
import { any } from "underscore";
import appReducer, { IAppAction } from "./appReducer";

export const initialAppState = {
    userInfo: {},
    loading: false
}

export const AppContext = createContext<{
    appState: typeof initialAppState;
    appDispatch: (action: IAppAction) => void;
}>({
    appState: initialAppState,
    appDispatch: ()=>{},
});

/* export const AppProvider: FC = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, initialAppState)
    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    );
} */