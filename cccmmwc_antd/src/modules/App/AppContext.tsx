import { AES, enc } from "crypto-js";
import { createContext, FC, useEffect, useReducer } from "react";
import { getHashPasscode } from "../../config/hashpasswcode";
import appReducer, { IAppAction } from "./appReducer";
import useAppState from "./hooks/useAppState";

export const initialAppState = {
    userInfo: {},
    loading: false
}

export const AppContext = createContext<{
    appState: typeof initialAppState;
    appDispatch: (action: IAppAction) => void;
}>({
    appState: initialAppState,
    appDispatch: () => { },
});

export const AppProvider: FC = ({ children }) => {

    const aState=useAppState();
    const [appState, appDispatch] = useReducer(appReducer, initialAppState)
    useEffect(() => {
        appDispatch({
            "type": "INITIAL_APP",
            "payload": aState,
        })
    }, []);


    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    );
} 