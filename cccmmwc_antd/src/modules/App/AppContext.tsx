import { createContext, FC, useEffect, useReducer } from "react";
import appReducer, { IAppAction } from "./appReducer";
import useMenus from "./hooks/useMenus";

export const initialAppState = {
    loading: false,
}

export const AppContext = createContext<{
    appState: typeof initialAppState;
    appDispatch: (action: IAppAction) => void;
}>({
    appState: initialAppState,
    appDispatch: () => { },
});

export const AppProvider: FC = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, initialAppState)
    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    );
} 